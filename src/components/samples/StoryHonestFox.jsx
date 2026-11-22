import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const toneStyles = {
  reflect: { emoji: '💭', color: '#8d99ae' },
  good: { emoji: '🌤️', color: '#00266d' },
  best: { emoji: '🌟', color: '#e8620f' },
};

function StoryHonestFox() {
  const { t } = useTranslation();
  const [nodeId, setNodeId] = useState('start');

  const STORY = {
    start: {
      text: t('samples.story_start_text'),
      choices: [
        { label: t('samples.story_start_choice_1'), next: 'keep1' },
        { label: t('samples.story_start_choice_2'), next: 'search1' },
      ],
    },
    keep1: {
      text: t('samples.story_keep1_text'),
      choices: [
        { label: t('samples.story_keep1_choice_1'), next: 'keepEndReflect' },
        { label: t('samples.story_keep1_choice_2'), next: 'keepEndGood' },
      ],
    },
    search1: {
      text: t('samples.story_search1_text'),
      choices: [
        { label: t('samples.story_search1_choice_1'), next: 'searchEndBest' },
        { label: t('samples.story_search1_choice_2'), next: 'searchEndReward' },
      ],
    },
    keepEndReflect: {
      ending: true,
      tone: 'reflect',
      text: t('samples.story_end_reflect_text'),
      moral: t('samples.story_end_reflect_moral'),
    },
    keepEndGood: {
      ending: true,
      tone: 'good',
      text: t('samples.story_end_good_text'),
      moral: t('samples.story_end_good_moral'),
    },
    searchEndReward: {
      ending: true,
      tone: 'good',
      text: t('samples.story_end_reward_text'),
      moral: t('samples.story_end_reward_moral'),
    },
    searchEndBest: {
      ending: true,
      tone: 'best',
      text: t('samples.story_end_best_text'),
      moral: t('samples.story_end_best_moral'),
    },
  };

  const node = STORY[nodeId];

  const restart = () => setNodeId('start');

  return (
    <div className="story-experience">
      <div className="story-scene">
        <span className="story-scene-emoji">🦊</span>
        <p className="story-text">{node.text}</p>
      </div>

      {!node.ending && (
        <div className="story-choices">
          {node.choices.map((choice) => (
            <button
              key={choice.next}
              className="story-choice-btn"
              onClick={() => setNodeId(choice.next)}
            >
              {choice.label}
            </button>
          ))}
        </div>
      )}

      {node.ending && (
        <div
          className="story-moral"
          style={{ borderColor: toneStyles[node.tone].color }}
        >
          <span className="story-moral-emoji">{toneStyles[node.tone].emoji}</span>
          <p><strong>{t('samples.moral_label')}</strong> {node.moral}</p>
          <button className="story-restart-btn" onClick={restart}>
            {t('samples.restart_story')}
          </button>
        </div>
      )}
    </div>
  );
}

export default StoryHonestFox;
