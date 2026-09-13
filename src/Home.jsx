import { Link } from 'react-router-dom'
import WildlifeScene from './WildlifeScene.jsx'

export default function Home() {
  return (
    <div className="page">
      <WildlifeScene theme="home" />
      <div className="stack">
      <div className="home-panel">
        <p className="badge">⚡ Wildlife × Energy 🌿</p>
        <h1 className="home-title">
          Welcome to the
          <span>ACPET scavenger hunt</span>
        </h1>
        <p className="home-lead">
          The forest is charged today. Suns hum, rivers spin, and little lanterns blink in the grass.
          Your clues live on animal trails — ask your guide for a creature’s name, then follow its path.
        </p>
        <p className="home-hint">Each animal name is a secret route. Tread softly. Hunt brightly.</p>
        <div className="paw-row" aria-hidden="true">
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
        </div>
      </div>
      <Link className="ranger-link" to="/customize">
        Ranger station — edit clues
      </Link>
      </div>
    </div>
  )
}
