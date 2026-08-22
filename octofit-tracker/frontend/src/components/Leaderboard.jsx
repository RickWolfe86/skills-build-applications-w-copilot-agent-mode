import ResourceView from './ResourceView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

export default function Leaderboard() {
  return <ResourceView resource="leaderboard" endpoint={endpoint} title="Leaderboard" description="A little friendly competition can carry you further." renderItem={(entry) => (
    <article className="resource-card rank-card" key={entry._id}>
      <span className="card-index">RANK {entry.rank}</span><h2>{entry.points} pts</h2><p>{entry.period}</p><strong>{entry.user}</strong>
    </article>
  )} />;
}