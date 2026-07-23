import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ScopeSequence.css';

const scope = [
  { month: 'September', pillar: 'Caring', focus: 'Kindness, compassion, empathy, helping others, mercy', objective: 'By the end of September, students will practice acts of kindness and demonstrate empathy toward classmates.' },
  { month: 'October', pillar: 'Responsibility', focus: 'Accountability, reliability, self-management', objective: 'By the end of October, students will complete tasks independently and take ownership of their actions.' },
  { month: 'November', pillar: 'Respect', focus: 'Respect for self, others, teachers, parents, nature', objective: 'By the end of November, students will communicate respectfully with peers, teachers, and family.' },
  { month: 'December', pillar: 'Trustworthiness', focus: 'Honesty, integrity, keeping promises', objective: 'By the end of December, students will practice honesty and follow through on commitments.' },
  { month: 'January', pillar: 'Fairness', focus: 'Justice, inclusion, equality, sportsmanship', objective: 'By the end of January, students will apply fairness and inclusion in group activities and games.' },
  { month: 'February', pillar: 'Leadership', focus: 'Initiative, teamwork, service', objective: 'By the end of February, students will take initiative in group projects and support teammates.' },
  { month: 'March', pillar: 'Perseverance', focus: 'Resilience, courage, growth mindset', objective: 'By the end of March, students will demonstrate resilience when facing academic or social challenges.' },
  { month: 'April', pillar: 'Citizenship', focus: 'Community, patriotism, environmental responsibility', objective: 'By the end of April, students will participate in a community or environmental service activity.' },
  { month: 'May', pillar: 'Self-Discipline', focus: 'Self-control, goal setting, healthy habits', objective: 'By the end of May, students will set and track progress toward a personal goal.' },
];

function ScopeSequence() {
  return (
    <>
      <Header />
      <section className="scope-section">
        <div className="scope-wrapper">
          <h1>Scope and Sequence</h1>
          <p className="scope-intro">
            MoralEd follows a structured, month-by-month character education
            calendar. Each month introduces a core pillar, a set of related
            skills, and a clear learning objective your teachers can plan
            around and measure.
          </p>

          <table className="scope-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Pillar</th>
                <th>Skills Focus</th>
                <th>Learning Objective</th>
              </tr>
            </thead>
            <tbody>
              {scope.map((row, index) => (
                <tr key={row.month} className={index % 2 === 1 ? 'scope-row-shaded' : ''}>
                  <td>{row.month}</td>
                  <td className="scope-pillar">{row.pillar}</td>
                  <td>{row.focus}</td>
                  <td>{row.objective}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ScopeSequence;