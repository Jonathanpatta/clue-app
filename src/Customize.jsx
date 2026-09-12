import { useState } from 'react'
import { Link } from 'react-router-dom'
import { defaultClues, getClues, resetClues, saveClues } from './clues.js'
import WildlifeScene from './WildlifeScene.jsx'

export default function Customize() {
  const [clues, setClues] = useState(getClues)
  const [note, setNote] = useState('')

  function update(i, field, value) {
    setClues((list) => list.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)))
  }

  function save() {
    const cleaned = clues
      .map((c) => ({
        slug: c.slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, ''),
        title: c.title.trim(),
        text: c.text,
      }))
      .filter((c) => c.slug)
    saveClues(cleaned)
    setClues(cleaned)
    setNote('Saved on this device. Routes match each slug, like /tiger.')
  }

  function add() {
    setClues((list) => [...list, { slug: 'newclue', title: 'New Clue', text: 'Write your clue here.' }])
  }

  function remove(i) {
    setClues((list) => list.filter((_, idx) => idx !== i))
  }

  function reset() {
    resetClues()
    setClues(defaultClues)
    setNote('Restored the default ACPET clues.')
  }

  return (
    <div className="page customize-page">
      <WildlifeScene theme="home" />
      <div className="customize">
        <p className="badge">Ranger station</p>
        <h1>Customize clues</h1>
        <p className="home-lead">
          Change titles and text anytime. The slug is the page route — <code>tiger</code> becomes <code>/tiger</code>.
          You can also edit the defaults in <code>src/clues.js</code>.
        </p>
        {clues.map((clue, i) => (
          <fieldset key={i} className="clue-card">
            <legend>{clue.slug ? `/${clue.slug}` : 'new route'}</legend>
            <label>
              Slug (route)
              <input value={clue.slug} onChange={(e) => update(i, 'slug', e.target.value)} />
            </label>
            <label>
              Title
              <input value={clue.title} onChange={(e) => update(i, 'title', e.target.value)} />
            </label>
            <label>
              Clue text
              <textarea rows={5} value={clue.text} onChange={(e) => update(i, 'text', e.target.value)} />
            </label>
            <div className="row">
              <Link className="ghost-link" to={`/${clue.slug || ''}`}>View /{clue.slug || '...'}</Link>
              <button type="button" className="ghost-link" onClick={() => remove(i)}>Remove</button>
            </div>
          </fieldset>
        ))}
        <div className="row">
          <button type="button" className="btn" onClick={save}>Save all clues</button>
          <button type="button" className="btn secondary" onClick={add}>Add a clue</button>
          <button type="button" className="ghost-link" onClick={reset}>Reset defaults</button>
          <Link className="ghost-link" to="/">Back to camp</Link>
        </div>
        {note ? <p className="note">{note}</p> : null}
      </div>
    </div>
  )
}
