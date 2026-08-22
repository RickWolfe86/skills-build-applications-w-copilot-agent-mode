import ResourceView from './ResourceView.jsx';

export default function Workouts() {
  return <ResourceView resource="workouts" title="Next up" description="Smart starting points for your next focused session." renderItem={(workout) => (
    <article className="resource-card" key={workout._id || workout.name}>
      <span className="card-index">{workout.focus}</span><h2>{workout.name}</h2><p>{workout.durationMinutes} minutes · {workout.difficulty}</p><strong>{workout.exercises?.join(' · ')}</strong>
    </article>
  )} />;
}