import ResourceView from './ResourceView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

export default function Users() {
  return <ResourceView resource="users" endpoint={endpoint} title="Your crew" description="The people turning small habits into lasting progress." renderItem={(user) => (
    <article className="resource-card" key={user._id || user.email}>
      <span className="card-index">USER</span><h2>{user.name}</h2><p>{user.email}</p><strong>{user.fitnessLevel}</strong>
    </article>
  )} />;
}