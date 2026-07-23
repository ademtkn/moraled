import React, { useEffect, useRef, useState } from 'react';

const LINES = [
  { text: 'Small hands can carry big kindness today', type: 'verse' },
  { text: 'A smile, a hello can brighten the way', type: 'verse' },
  { text: 'Share what you have, lend a hand when you can', type: 'verse' },
  { text: 'Kindness grows bigger the more that we plan', type: 'verse' },
  { text: 'Kindness, kindness, pass it around!', type: 'chorus' },
  { text: 'Kindness, kindness, let it resound!', type: 'chorus' },
  { text: 'One small act can travel so far', type: 'verse' },
  { text: "Be the kind light, be someone's star", type: 'verse' },
  { text: 'Kindness, kindness, pass it around!', type: 'chorus' },
  { text: 'Kindness, kindness, let it resound!', type: 'chorus' },
];

const LINE_DURATION = 2000;

function SongKindnessAnthem() {
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
          {playing ? '⏸ Pause' : activeLine === -1 ? '▶️ Play' : '▶️ Resume'}
        </button>
        <button className="song-replay-btn" onClick={handleReplay}>
          🔁 Replay
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
            {line.text}
          </p>
        ))}
      </div>

      <p className="song-hint">Sing along as each line lights up! 🎤</p>
    </div>
  );
}

export default SongKindnessAnthem;
