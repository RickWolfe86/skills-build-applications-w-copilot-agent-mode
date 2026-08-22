import ResourceView from './ResourceView.jsx';

export default function Users() {
  return <ResourceView resource="users" title="Your crew" description="The people turning small habits into lasting progress." renderItem={(user) => (
    <article className="resource-card" key={user._id || user.email}>
      <span className="card-index">USER</span><h2>{user.name}</h2><p>{user.email}</p><strong>{user.fitnessLevel}</strong>
    </article>
  )} />;
}