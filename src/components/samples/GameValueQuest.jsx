import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QUESTIONS = [
  {
    valueKey: 'empathy',
    scenarioKey: 'samples.game_q1_scenario',
    options: [
      { textKey: 'samples.game_q1_opt1', correct: false, feedbackKey: 'samples.game_q1_opt1_fb' },
      { textKey: 'samples.game_q1_opt2', correct: true, feedbackKey: 'samples.game_q1_opt2_fb' },
      { textKey: 'samples.game_q1_opt3', correct: false, feedbackKey: 'samples.game_q1_opt3_fb' },
    ],
  },
  {
    valueKey: 'honesty',
    scenarioKey: 'samples.game_q2_scenario',
    options: [
      { textKey: 'samples.game_q2_opt1', correct: false, feedbackKey: 'samples.game_q2_opt1_fb' },
      { textKey: 'samples.game_q2_opt2', correct: true, feedbackKey: 'samples.game_q2_opt2_fb' },
      { textKey: 'samples.game_q2_opt3', correct: false, feedbackKey: 'samples.game_q2_opt3_fb' },
    ],
  },
  {
    valueKey: 'responsibility',
    scenarioKey: 'samples.game_q3_scenario',
    options: [
      { textKey: 'samples.game_q3_opt1', correct: false, feedbackKey: 'samples.game_q3_opt1_fb' },
      { textKey: 'samples.game_q3_opt2', correct: true, feedbackKey: 'samples.game_q3_opt2_fb' },
      { textKey: 'samples.game_q3_opt3', correct: false, feedbackKey: 'samples.game_q3_opt3_fb' },
    ],
  },
  {
    valueKey: 'courage',
    scenarioKey: 'samples.game_q4_scenario',
    options: [
      { textKey: 'samples.game_q4_opt1', correct: false, feedbackKey: 'samples.game_q4_opt1_fb' },
      { textKey: 'samples.game_q4_opt2', correct: true, feedbackKey: 'samples.game_q4_opt2_fb' },
      { textKey: 'samples.game_q4_opt3', correct: false, feedbackKey: 'samples.game_q4_opt3_fb' },
    ],
  },
  {
    valueKey: 'kindness',
    scenarioKey: 'samples.game_q5_scenario',
    options: [
      { textKey: 'samples.game_q5_opt1', correct: false, feedbackKey: 'samples.game_q5_opt1_fb' },
      { textKey: 'samples.game_q5_opt2', correct: true, feedbackKey: 'samples.game_q5_opt2_fb' },
      { textKey: 'samples.game_q5_opt3', correct: false, feedbackKey: 'samples.game_q5_opt3_fb' },
    ],
  },
];

function getResultMessage(score, total, t) {
  const pct = score / total;
  if (pct === 1) return { icon: 'fas fa-trophy', text: t('samples.game_perfect') };
  if (pct >= 0.6) return { icon: 'fas fa-star', text: t('samples.game_good') };
  return { icon: 'fas fa-seedling', text: t('samples.game_grow') };
}

function GameValueQuest() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[step];

  const handleSelect = (option) => {
    if (selected) return;
    setSelected(option);
    if (option.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (step + 1 < QUESTIONS.length) {
      setStep((s) => s + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  if (finished) {
    const result = getResultMessage(score, QUESTIONS.length, t);
    return (
      <div className="game-experience game-result">
        <span className="game-result-emoji"><i className={result.icon}></i></span>
        <h3>{t('samples.game_score', { score, total: QUESTIONS.length })}</h3>
        <p>{result.text}</p>
        <button className="game-restart-btn" onClick={handleRestart}>
          {t('samples.game_play_again')}
        </button>
      </div>
    );
  }

  return (
    <div className="game-experience">
      <div className="game-progress">
        {t('samples.game_progress', { current: step + 1, total: QUESTIONS.length })}
        <div className="game-progress-bar">
          <div
            className="game-progress-fill"
            style={{ width: `${((step + (selected ? 1 : 0)) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <p className="game-scenario">{t(question.scenarioKey)}</p>

      <div className="game-options">
        {question.options.map((opt, i) => {
          let cls = 'game-option-btn';
          if (selected) {
            if (opt === selected) cls += opt.correct ? ' game-correct' : ' game-incorrect';
            else if (opt.correct) cls += ' game-correct';
          }
          return (
            <button key={i} type="button" className={cls} onClick={() => handleSelect(opt)} disabled={!!selected}>
              <span className="game-option-letter" aria-hidden="true">{String.fromCharCode(65 + i)}</span>
              <span className="game-option-text">{t(opt.textKey)}</span>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="game-feedback">
          <p>{t(selected.feedbackKey)}</p>
          <span className="game-value-tag">
            {t('samples.game_value_label', { value: t(`samples.game_value_${question.valueKey}`) })}
          </span>
          <button className="game-next-btn" onClick={handleNext}>
            {step + 1 < QUESTIONS.length ? t('samples.game_next') : t('samples.game_results')}
          </button>
        </div>
      )}
    </div>
  );
}

export default GameValueQuest;
