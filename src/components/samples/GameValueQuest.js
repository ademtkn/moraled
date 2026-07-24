import React, { useState } from 'react';

const QUESTIONS = [
  {
    scenario: 'You see a classmate drop their lunch tray and everyone laughs. What do you do?',
    value: 'Empathy',
    options: [
      { text: 'Laugh along with everyone else', correct: false, feedback: "That might feel easier in the moment, but it can really hurt someone." },
      { text: 'Help them pick it up and sit with them', correct: true, feedback: "That's empathy in action — noticing someone's feelings and acting with kindness." },
      { text: "Pretend you didn't see anything", correct: false, feedback: 'Walking away is easy, but a kind action makes a bigger difference.' },
    ],
  },
  {
    scenario: "You borrowed your friend's pencil and accidentally broke it. What's the best choice?",
    value: 'Honesty',
    options: [
      { text: "Hide it and hope they don't notice", correct: false, feedback: 'Hiding mistakes usually makes things harder later.' },
      { text: 'Tell them honestly and offer to replace it', correct: true, feedback: 'Being honest, even when uncomfortable, builds trust.' },
      { text: 'Blame someone else', correct: false, feedback: 'Blaming others can damage trust and friendships.' },
    ],
  },
  {
    scenario: 'Your team loses a game because of a mistake you made. What now?',
    value: 'Responsibility',
    options: [
      { text: "Quit the team so it doesn't happen again", correct: false, feedback: 'Giving up skips the chance to grow from the mistake.' },
      { text: 'Own the mistake and practice to improve', correct: true, feedback: 'Responsibility means owning outcomes and working to do better.' },
      { text: "Argue that it wasn't really your fault", correct: false, feedback: 'Avoiding responsibility rarely helps in the long run.' },
    ],
  },
  {
    scenario: "You want to try out for something, but you're scared you might fail in front of others. What helps most?",
    value: 'Courage',
    options: [
      { text: 'Skip it to avoid any risk of failing', correct: false, feedback: 'Avoiding all risk also means missing all growth.' },
      { text: "Try anyway, even though you're nervous", correct: true, feedback: "Courage isn't about having no fear — it's acting despite it." },
      { text: "Wait until you're 100% sure you'll succeed", correct: false, feedback: 'That moment rarely comes — courage means starting before feeling ready.' },
    ],
  },
  {
    scenario: 'A new student sits alone at lunch every day. What would show real character?',
    value: 'Kindness',
    options: [
      { text: 'Assume they want to be alone', correct: false, feedback: 'Sometimes people just need someone to make the first move.' },
      { text: 'Invite them to sit with your group', correct: true, feedback: 'Simple inclusion can be one of the most powerful acts of kindness.' },
      { text: 'Wait for someone else to do it', correct: false, feedback: 'Waiting for someone else means kindness never happens.' },
    ],
  },
];

function getResultMessage(score, total) {
  const pct = score / total;
  if (pct === 1) return { icon: 'fas fa-trophy', text: 'Perfect score! You have a great sense for strong character choices.' };
  if (pct >= 0.6) return { icon: 'fas fa-star', text: 'Nice work! You know your values well.' };
  return { icon: 'fas fa-seedling', text: 'Good try! Every quest is a chance to grow — play again to sharpen your instincts.' };
}

function GameValueQuest() {
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
    const result = getResultMessage(score, QUESTIONS.length);
    return (
      <div className="game-experience game-result">
        <span className="game-result-emoji"><i className={result.icon}></i></span>
        <h3>You scored {score} / {QUESTIONS.length}</h3>
        <p>{result.text}</p>
        <button className="game-restart-btn" onClick={handleRestart}>
          🔁 Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="game-experience">
      <div className="game-progress">
        Question {step + 1} of {QUESTIONS.length}
        <div className="game-progress-bar">
          <div
            className="game-progress-fill"
            style={{ width: `${((step + (selected ? 1 : 0)) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <p className="game-scenario">{question.scenario}</p>

      <div className="game-options">
        {question.options.map((opt, i) => {
          let cls = 'game-option-btn';
          if (selected) {
            if (opt === selected) cls += opt.correct ? ' game-correct' : ' game-incorrect';
            else if (opt.correct) cls += ' game-correct';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={!!selected}>
              {opt.text}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="game-feedback">
          <p>{selected.feedback}</p>
          <span className="game-value-tag">Value: {question.value}</span>
          <button className="game-next-btn" onClick={handleNext}>
            {step + 1 < QUESTIONS.length ? 'Next →' : 'See Results 🎉'}
          </button>
        </div>
      )}
    </div>
  );
}

export default GameValueQuest;
