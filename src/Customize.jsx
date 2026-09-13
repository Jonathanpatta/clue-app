import { useState } from 'react'
import { Link } from 'react-router-dom'
import { defaultClues, getClues, resetClues, saveClues } from './clues.js'
import WildlifeScene from './WildlifeScene.jsx'

const SCENES = ['grassland', 'rainforest', 'wetland', 'highland', 'monsoon', 'dusk']

export default function Customize() {
  const [clues, setClues] = useState(getClues)
  const [note, setNote] = useState('')

  function update(i, field, value) {
    setClues((list) => list.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)))
  }

  function save() {
    const cleaned = clues
      .map((c) => ({
        id: c.id.trim().toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5),
        title: c.title.trim(),
        text: c.text,
        answer: c.answer,
        nextLocation: (c.nextLocation ?? '').trim(),
        hints: String(c.hintsText ?? (c.hints ?? []).join('\n'))
          .split('\n')
          .map((h) => h.trim())
          .filter(Boolean),
        scene: SCENES.includes(c.scene) ? c.scene : 'grassland',
      }))
      .filter((c) => c.id)
    saveClues(cleaned)
    setClues(cleaned)
    setNote('Saved on this device. Routes match each id, like /k8v3q.')
  }

  function add() {
    setClues((list) => [
      ...list,
      {
        id: 'xxxxx',
        title: 'New Clue',
        text: 'Write your clue here.',
        answer: '',
        hints: [],
        nextLocation: '',
        scene: 'grassland',
      },
    ])
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
      <div className="stack">
        <div className="customize">
          <p className="badge">Ranger station</p>
          <h1>Customize clues</h1>
          <p className="home-lead">
            A correct answer reveals the next location, not the next slug.
          </p>
          {clues.map((clue, i) => (
            <div key={i} className="clue-card">
              <p className="clue-card-label">{clue.id ? `/${clue.id}` : 'new route'}</p>
              <label>
                Id (route)
                <input value={clue.id} maxLength={5} onChange={(e) => update(i, 'id', e.target.value)} />
              </label>
              <label>
                Title
                <input value={clue.title} onChange={(e) => update(i, 'title', e.target.value)} />
              </label>
              <label>
                Clue text
                <textarea rows={4} value={clue.text} onChange={(e) => update(i, 'text', e.target.value)} />
              </label>
              <label>
                Answer
                <input value={clue.answer ?? ''} onChange={(e) => update(i, 'answer', e.target.value)} />
              </label>
              <label>
                Next location
                <input value={clue.nextLocation ?? ''} onChange={(e) => update(i, 'nextLocation', e.target.value)} />
              </label>
              <label>
                Hints (one per line)
                <textarea
                  rows={4}
                  value={clue.hintsText ?? (clue.hints ?? []).join('\n')}
                  onChange={(e) => update(i, 'hintsText', e.target.value)}
                />
              </label>
              <label>
                Habitat scene
                <select value={clue.scene ?? 'grassland'} onChange={(e) => update(i, 'scene', e.target.value)}>
                  {SCENES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>
              <div className="row">
                <Link className="ghost-link" to={`/${clue.id || ''}`}>View /{clue.id || '...'}</Link>
                <button type="button" className="ghost-link" onClick={() => remove(i)}>Remove</button>
              </div>
            </div>
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
    </div>
  )
}
