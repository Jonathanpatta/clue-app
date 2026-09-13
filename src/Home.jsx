import { Link } from 'react-router-dom'
import WildlifeScene from './WildlifeScene.jsx'

export default function Home() {
  return (
    <div className="page">
      <WildlifeScene theme="home" />
      <div className="stack">
        <div className="home-panel">
          <p className="badge">🌿 Wildlife trail</p>
          <h1 className="home-title">
            Welcome to the
            <span>ACPET scavenger hunt</span>
          </h1>
          <p className="home-lead">
            Ask your guide for a five-character trail code, then open that path.
            Read the clue, use hints if you need them, and type the place you found.
            A correct answer unlocks the next code.
          </p>
          <p className="home-hint">Codes are not the answers. Keep them close. Hunt brightly.</p>
        </div>
        <Link className="ranger-link" to="/customize">
          Ranger station — edit clues
        </Link>
      </div>
    </div>
  )
}
