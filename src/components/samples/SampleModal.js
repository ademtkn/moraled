import React from 'react';
import StoryHonestFox from './StoryHonestFox';
import SongKindnessAnthem from './SongKindnessAnthem';
import GameValueQuest from './GameValueQuest';
import './SampleModal.css';

const CONFIG = {
  story: { icon: 'fas fa-book-open', title: 'The Honest Fox', subtitle: 'An interactive tale about honesty and courage' },
  song: { icon: 'fas fa-music', title: 'Kindness Anthem', subtitle: 'Sing along to spread kindness' },
  game: { icon: 'fas fa-gamepad', title: 'Value Quest', subtitle: 'Make the right call in five real-life scenarios' },
};

function SampleModal({ type, onClose }) {
  if (!type) return null;
  const config = CONFIG[type];

  return (
    <div className="sample-modal-backdrop" onClick={onClose}>
      <div className="sample-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sample-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h3 className="sample-modal-title"><i className={config.icon}></i> {config.title}</h3>
        <p className="sample-modal-subtitle">{config.subtitle}</p>

        {type === 'story' && <StoryHonestFox />}
        {type === 'song' && <SongKindnessAnthem />}
        {type === 'game' && <GameValueQuest />}
      </div>
    </div>
  );
}

export default SampleModal;
