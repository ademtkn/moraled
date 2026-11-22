import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import StoryHonestFox from './StoryHonestFox';
import SongKindnessAnthem from './SongKindnessAnthem';
import GameValueQuest from './GameValueQuest';
import './SampleModal.css';

const FOCUSABLE = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function SampleModal({ type, onClose }) {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Dialog behaviour: lock page scroll, focus the close button, close on Escape,
  // keep Tab inside the dialog, and give focus back to the opener on close.
  useEffect(() => {
    if (!type) return undefined;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !modalRef.current) return;
      const items = [...modalRef.current.querySelectorAll(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      if (opener && typeof opener.focus === 'function') opener.focus();
    };
  }, [type]);

  if (!type) return null;

  const CONFIG = {
    story: { icon: 'fas fa-book-open', title: t('samples.story_title'), subtitle: t('samples.story_subtitle') },
    song: { icon: 'fas fa-music', title: t('samples.song_title'), subtitle: t('samples.song_subtitle') },
    game: { icon: 'fas fa-puzzle-piece', title: t('samples.game_title'), subtitle: t('samples.game_subtitle') },
  };
  const config = CONFIG[type];

  return (
    <div className="sample-modal-backdrop" onClick={onClose}>
      <div
        ref={modalRef}
        className={`sample-modal sample-modal--${type}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sample-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sample-modal-head">
          <span className="sample-modal-icon" aria-hidden="true">
            <i className={config.icon}></i>
          </span>
          <div className="sample-modal-heading">
            <h3 className="sample-modal-title" id="sample-modal-title">{config.title}</h3>
            <p className="sample-modal-subtitle">{config.subtitle}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="sample-modal-close"
            onClick={onClose}
            aria-label={t('samples.close')}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="sample-modal-body">
          {type === 'story' && <StoryHonestFox />}
          {type === 'song' && <SongKindnessAnthem />}
          {type === 'game' && <GameValueQuest />}
        </div>
      </div>
    </div>
  );
}

export default SampleModal;
