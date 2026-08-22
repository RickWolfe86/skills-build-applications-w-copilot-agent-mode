import { useEffect, useState } from 'react';
import { fetchResource } from '../api.js';

export default function ResourceView({ resource, title, description, renderItem }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResource(resource).then(setItems).catch((loadError) => setError(loadError.message));
  }, [resource]);

  return (
    <section className="resource-page">
      <div className="page-heading">
        <span className="eyebrow">TRACKER / {resource.toUpperCase()}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      {!error && items.length === 0 && <div className="empty-state">No {resource} recorded yet.</div>}
      <div className="resource-grid">{items.map((item) => renderItem(item))}</div>
    </section>
  );
}