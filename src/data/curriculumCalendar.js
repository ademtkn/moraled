// The shared September–May calendar follows the existing grade-topic arrays
// in ageTopics.js (KAO curriculum order). Keep topic/focus arrays in this order.
// `pillar` identifies the existing translations; it is not a month number.
export const CURRICULUM_CALENDAR = [
  { month: 9, pillar: 1, icon: 'fas fa-heart' }, // Caring
  { month: 10, pillar: 3, icon: 'fas fa-hand-holding-heart' }, // Respect
  { month: 11, pillar: 4, icon: 'fas fa-star' }, // Trustworthiness
  { month: 12, pillar: 2, icon: 'fas fa-handshake' }, // Responsibility
  { month: 1, pillar: 5, icon: 'fas fa-scale-balanced' }, // Fairness
  { month: 2, pillar: 8, icon: 'fas fa-globe' }, // Citizenship
  { month: 3, pillar: 7, icon: 'fas fa-seedling' }, // Perseverance
  { month: 4, pillar: 6, icon: 'fas fa-lightbulb' }, // Leadership
  { month: 5, pillar: 9, icon: 'fas fa-bullseye' }, // Self-Discipline
].map((entry, index) => ({
  ...entry,
  index,
  number: index + 1,
  season: index < 3 ? 'autumn' : index < 6 ? 'winter' : 'spring',
  monthKey: `scopeSequence.month_${index + 1}`,
  pillarKey: `scopeSequence.pillar_${entry.pillar}`,
  summaryKey: `home.pillar_focus_${entry.pillar}`,
  skillsKey: `scopeSequence.skills_${entry.pillar}`,
  objectiveKey: `scopeSequence.objective_${entry.pillar}`,
}));

// Outside the school year (June–August), preview September's value.
export function getCurrentCurriculumMonth(date = new Date()) {
  return CURRICULUM_CALENDAR.find((entry) => entry.month === date.getMonth() + 1)
    ?? CURRICULUM_CALENDAR[0];
}
