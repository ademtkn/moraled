import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LINES = [
  { key: 'samples.song_line_1', type: 'verse' },
  { key: 'samples.song_line_2', type: 'verse' },
  { key: 'samples.song_line_3', type: 'verse' },
  { key: 'samples.song_line_4', type: 'verse' },
  { key: 'samples.song_line_5', type: 'chorus' },
  { key: 'samples.song_line_6', type: 'chorus' },
  { key: 'samples.song_line_7', type: 'verse' },
  { key: 'samples.song_line_8', type: 'verse' },
  { key: 'samples.song_line_9', type: 'chorus' },
  { key: 'samples.song_line_10', type: 'chorus' },
];

const LINE_DURATION = 2000;

function SongKindnessAnthem() {
  const { t } = useTranslation();
  const [activeLine, setActiveLine] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setActiveLine((prev) => {
          if (prev >= LINES.length - 1) {
            setPlaying(false);
            return -1;
          }
          return prev + 1;
        });
      }, LINE_DURATION);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const handlePlayPause = () => {
    if (!playing && activeLine === -1) {
      setActiveLine(0);
    }
    setPlaying((p) => !p);
  };

  const handleReplay = () => {
    setActiveLine(0);
    setPlaying(true);
  };

  return (
    <div className="song-experience">
      <div className="song-controls">
        <button className="song-play-btn" onClick={handlePlayPause}>
          {playing ? t('samples.song_pause') : activeLine === -1 ? t('samples.song_play') : t('samples.song_resume')}
        </button>
        <button className="song-replay-btn" onClick={handleReplay}>
          {t('samples.song_replay')}
        </button>
      </div>

      <div className="song-lyrics">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={
              'song-line ' +
              (line.type === 'chorus' ? 'song-line-chorus ' : '') +
              (i === activeLine ? 'song-line-active' : '')
            }
          >
            {line.type === 'chorus' && <span className="song-note"><i className="fas fa-music"></i></span>}
            {t(line.key)}
          </p>
        ))}
      </div>

      <p className="song-hint">{t('samples.song_hint')}</p>
    </div>
  );
}

export default SongKindnessAnthem;
