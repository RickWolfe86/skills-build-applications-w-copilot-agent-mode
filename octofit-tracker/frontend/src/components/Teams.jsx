import ResourceView from './ResourceView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

export default function Teams() {
  return <ResourceView resource="teams" endpoint={endpoint} title="Teams with intent" description="Find your people and the goal you are chasing together." renderItem={(team) => (
    <article className="resource-card" key={team._id || team.name}>
      <span className="card-index">TEAM</span><h2>{team.name}</h2><p>Coached by {team.coach}</p><strong>{team.goal}</strong>
    </article>
  )} />;
}