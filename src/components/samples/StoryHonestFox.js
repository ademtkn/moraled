import React, { useState } from 'react';

const STORY = {
  start: {
    text: "Ruby the fox is walking home through the forest when she spots a small leather bag beneath the old oak tree. Inside: a pile of golden coins. No one is around.",
    choices: [
      { label: '🦊 Keep the coins and hurry home', next: 'keep1' },
      { label: '🔍 Look around for whoever lost them', next: 'search1' },
    ],
  },
  keep1: {
    text: "Ruby tucks the bag under her arm and trots home, already imagining what she'll buy. But on the way, she passes a wooden sign nailed to a tree: 'LOST: A bag of coins, very important to my family. — Mr. Badger'",
    choices: [
      { label: '🚶 Keep walking and say nothing', next: 'keepEndReflect' },
      { label: '↩️ Turn back and find Mr. Badger', next: 'keepEndGood' },
    ],
  },
  search1: {
    text: "Ruby asks around the village and finds Mr. Badger, pacing anxiously outside his burrow. 'I lost my late father's coins,' he sighs. 'They're the only thing I have left of him.'",
    choices: [
      { label: '🎁 Return the coins right away', next: 'searchEndBest' },
      { label: '🤔 Mention a small reward before returning them', next: 'searchEndReward' },
    ],
  },
  keepEndReflect: {
    ending: true,
    tone: 'reflect',
    text: "Ruby spends the coins, but every purchase feels hollow. She keeps thinking of Mr. Badger's worried face. That night, she can't sleep.",
    moral: "Taking what isn't ours might feel easy in the moment — but it rarely brings real peace.",
  },
  keepEndGood: {
    ending: true,
    tone: 'good',
    text: "Ruby turns around and finds Mr. Badger still searching, tears in his eyes. She hands back the bag. 'I almost kept it,' she admits, 'but it didn't feel right.' Mr. Badger hugs her tightly.",
    moral: "It's never too late to make the right choice — and honesty always feels better late than never.",
  },
  searchEndReward: {
    ending: true,
    tone: 'good',
    text: "Mr. Badger pauses, then smiles. 'That's fair,' he says, and gives Ruby a small token of thanks. Ruby feels a little embarrassed for asking, but glad she still did the honest thing first.",
    moral: "Honesty doesn't mean you can't be treated kindly in return — but the right choice comes first.",
  },
  searchEndBest: {
    ending: true,
    tone: 'best',
    text: "Mr. Badger's eyes fill with tears of relief. 'You didn't have to look for me,' he says. 'You could have just kept it.' Ruby shrugs. 'It wasn't mine to keep.' From then on, the whole forest knows her as the honest fox.",
    moral: "Honesty and courage — doing right even when no one is watching — build trust that lasts a lifetime.",
  },
};

const toneStyles = {
  reflect: { emoji: '💭', color: '#8d99ae' },
  good: { emoji: '🌤️', color: '#045b57' },
  best: { emoji: '🌟', color: '#e07856' },
};

function StoryHonestFox() {
  const [nodeId, setNodeId] = useState('start');
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
          <p><strong>Moral of the story:</strong> {node.moral}</p>
          <button className="story-restart-btn" onClick={restart}>
            🔁 Try a different path
          </button>
        </div>
      )}
    </div>
  );
}

export default StoryHonestFox;
