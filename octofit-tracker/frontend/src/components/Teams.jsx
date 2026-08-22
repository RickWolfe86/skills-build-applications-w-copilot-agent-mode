import ResourceView from './ResourceView.jsx';

export default function Teams() {
  return <ResourceView resource="teams" title="Teams with intent" description="Find your people and the goal you are chasing together." renderItem={(team) => (
    <article className="resource-card" key={team._id || team.name}>
      <span className="card-index">TEAM</span><h2>{team.name}</h2><p>Coached by {team.coach}</p><strong>{team.goal}</strong>
    </article>
  )} />;
}