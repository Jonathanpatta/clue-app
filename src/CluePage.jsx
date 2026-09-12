import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getClue, upsertClue } from './clues.js'
import Scroll from './Scroll.jsx'
import WildlifeScene from './WildlifeScene.jsx'

export default function CluePage() {
  const { slug } = useParams()
  const [clue, setClue] = useState(() => getClue(slug))
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    const next = getClue(slug)
    setClue(next)
    setTitle(next?.title ?? '')
    setText(next?.text ?? '')
    setEditing(false)
  }, [slug])

  if (!clue) {
    return (
      <div className="page">
        <WildlifeScene theme="home" />
        <div className="home-panel">
          <h1 className="home-title">This trail went cold</h1>
          <p className="home-lead">
            No clue lives at /{slug}. Check the name, or add one in the ranger station.
          </p>
          <Link className="btn" to="/">Back to camp</Link>
        </div>
      </div>
    )
  }

  function save(e) {
    e.preventDefault()
    upsertClue(clue.slug, { title, text })
    setClue({ ...clue, title, text })
    setEditing(false)
  }

  return (
    <div className="page">
      <WildlifeScene theme={clue.slug.toLowerCase()} />
      <Scroll title={clue.title} text={clue.text} />
      <div className="clue-tools">
        <Link className="ghost-link" to="/">Camp</Link>
        <button
          type="button"
          className="ghost-link"
          onClick={() => {
            setTitle(clue.title)
            setText(clue.text)
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
            <textarea rows={8} value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <button className="btn" type="submit">Save clue</button>
        </form>
      ) : null}
    </div>
  )
}
