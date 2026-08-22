import ResourceView from './ResourceView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

export default function Workouts() {
  return <ResourceView resource="workouts" endpoint={endpoint} title="Next up" description="Smart starting points for your next focused session." renderItem={(workout) => (
    <article className="resource-card" key={workout._id || workout.name}>
      <span className="card-index">{workout.focus}</span><h2>{workout.name}</h2><p>{workout.durationMinutes} minutes · {workout.difficulty}</p><strong>{workout.exercises?.join(' · ')}</strong>
    </article>
  )} />;
}