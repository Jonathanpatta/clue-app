import WildlifeScene from '../components/WildlifeScene.jsx'

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
            Read the clue, use hints if you need them, and type the answer.
            A correct answer names the next location.
          </p>
          <p className="home-hint">Keep them close. Hunt brightly.</p>
        </div>
      </div>
    </div>
  )
}
