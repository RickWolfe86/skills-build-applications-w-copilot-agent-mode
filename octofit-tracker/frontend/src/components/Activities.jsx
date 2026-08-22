import ResourceView from './ResourceView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

export default function Activities() {
  return <ResourceView resource="activities" endpoint={endpoint} title="Activity log" description="A clear record of the work you have put in." renderItem={(activity) => (
    <article className="resource-card" key={activity._id}>
      <span className="card-index">ACTIVITY</span><h2>{activity.type}</h2><p>{activity.durationMinutes} minutes · {activity.calories} calories</p><strong>{new Date(activity.completedAt).toLocaleDateString()}</strong>
    </article>
  )} />;
}