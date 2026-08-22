import ResourceView from './ResourceView.jsx';

export default function Leaderboard() {
  return <ResourceView resource="leaderboard" title="Leaderboard" description="A little friendly competition can carry you further." renderItem={(entry) => (
    <article className="resource-card rank-card" key={entry._id}>
      <span className="card-index">RANK {entry.rank}</span><h2>{entry.points} pts</h2><p>{entry.period}</p><strong>{entry.user}</strong>
    </article>
  )} />;
}