import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import './App.css';

function Dashboard() {
  return (
    <section className="dashboard-hero">
      <span className="eyebrow">OCTOFIT TRACKER</span>
      <h1>Make every session count.</h1>
      <p>One focused place for your people, progress, and next workout.</p>
      <div className="hero-stats">
        <span><strong>5</strong> live views</span>
        <span><strong>8000</strong> API port</span>
        <span><strong>∞</strong> momentum</span>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <NavLink className="brand" to="/">
            <img src="/src/assets/hero.png" alt="" />
            <span>OctoFit<span className="brand-mark">/</span></span>
          </NavLink>
          <nav className="main-nav" aria-label="Main navigation">
            {['users', 'teams', 'activities', 'leaderboard', 'workouts'].map((item) => (
              <NavLink key={item} to={`/${item}`}>{item}</NavLink>
            ))}
          </nav>
        </header>
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;