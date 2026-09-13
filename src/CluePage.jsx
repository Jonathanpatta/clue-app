import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getClue, getNextClue, matchesAnswer, upsertClue } from './clues.js'
import Scroll from './Scroll.jsx'
import WildlifeScene from './WildlifeScene.jsx'

function solvedKey(id) {
  return `acpet-solved:${id}`
}

export default function CluePage() {
  const { slug } = useParams()
  const [clue, setClue] = useState(() => getClue(slug))
  const [guess, setGuess] = useState('')
  const [hintCount, setHintCount] = useState(0)
  const [solved, setSolved] = useState(false)
  const [wrong, setWrong] = useState(false)
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [answer, setAnswer] = useState('')
  const [hintsText, setHintsText] = useState('')

  useEffect(() => {
    const next = getClue(slug)
    setClue(next)
    setTitle(next?.title ?? '')
    setText(next?.text ?? '')
    setAnswer(next?.answer ?? '')
    setHintsText((next?.hints ?? []).join('\n'))
    setGuess('')
    setHintCount(0)
    setWrong(false)
    setEditing(false)
    setSolved(Boolean(next && sessionStorage.getItem(solvedKey(next.id))))
  }, [slug])

  if (!clue) {
    return (
      <div className="page">
        <WildlifeScene theme="home" />
        <div className="stack">
          <div className="home-panel">
            <h1 className="home-title">This trail went cold</h1>
            <p className="home-lead">No clue lives at /{slug}. Check the code with your guide.</p>
            <Link className="btn" to="/">Back to camp</Link>
          </div>
        </div>
      </div>
    )
  }

  const nextClue = getNextClue(clue.id)
  const hints = clue.hints ?? []

  function submit(e) {
    e.preventDefault()
    if (matchesAnswer(guess, clue.answer)) {
      sessionStorage.setItem(solvedKey(clue.id), '1')
      setSolved(true)
      setWrong(false)
      return
    }
    setWrong(true)
  }

  function save(e) {
    e.preventDefault()
    const hints = hintsText.split('\n').map((h) => h.trim()).filter(Boolean)
    upsertClue(clue.id, { title, text, answer, hints })
    setClue({ ...clue, title, text, answer, hints })
    setEditing(false)
  }

  return (
    <div className="page">
      <WildlifeScene theme={clue.scene || 'grassland'} />
      <div className="stack">
        <Scroll title={clue.title} text={clue.text} />
        <div className="hunt-box">
          {solved ? (
            <div className="solved">
              <p className="badge">Trail unlocked</p>
              {nextClue ? (
                <>
                  <p className="home-lead">Walk to the next marker and open this code:</p>
                  <p className="next-id">{nextClue.id}</p>
                  <Link className="btn" to={`/${nextClue.id}`}>Open /{nextClue.id}</Link>
                </>
              ) : (
                <p className="home-lead">The hunt is complete. Return to camp and tell the tale.</p>
              )}
            </div>
          ) : (
            <form className="guess-form" onSubmit={submit}>
              <label>
                Your answer
                <input
                  value={guess}
                  onChange={(e) => {
                    setGuess(e.target.value)
                    setWrong(false)
                  }}
                  autoComplete="off"
                  spellCheck="false"
                />
              </label>
              <button className="btn" type="submit">Check answer</button>
              {wrong ? <p className="wrong">Not that trail. Try a hint.</p> : null}
            </form>
          )}
          {hints.length ? (
            <div className="hints">
              {hints.slice(0, hintCount).map((h, i) => (
                <p key={i} className="hint-line">
                  Hint {i + 1}: {h}
                </p>
              ))}
              {hintCount < hints.length ? (
                <button type="button" className="ghost-link" onClick={() => setHintCount((n) => n + 1)}>
                  {hintCount ? 'Another hint' : 'Need a hint?'} ({hints.length - hintCount} left)
                </button>
              ) : (
                <p className="hint-done">All hints shown.</p>
              )}
            </div>
          ) : null}
        </div>
        <div className="clue-tools">
          <Link className="ghost-link" to="/">Camp</Link>
          <button
            type="button"
            className="ghost-link"
            onClick={() => {
              setTitle(clue.title)
              setText(clue.text)
              setAnswer(clue.answer)
              setHintsText((clue.hints ?? []).join('\n'))
              setEditing((v) => !v)
            }}
          >
            {editing ? 'Close editor' : 'Edit this clue'}
          </button>
        </div>
        {editing ? (
          <form className="editor" onSubmit={save}>
            <label>
              Title
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
              Clue text
              <textarea rows={6} value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <label>
              Answer
              <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </label>
            <label>
              Hints (one per line)
              <textarea rows={5} value={hintsText} onChange={(e) => setHintsText(e.target.value)} />
            </label>
            <button className="btn" type="submit">Save clue</button>
          </form>
        ) : null}
      </div>
    </div>
  )
}
