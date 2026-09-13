'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import WildlifeScene from '../../components/WildlifeScene.jsx'

const SCENES = ['grassland', 'rainforest', 'wetland', 'highland', 'monsoon', 'dusk']

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [clues, setClues] = useState([])
  const [note, setNote] = useState('')

  useEffect(() => {
    fetch('/api/admin/clues')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        setClues(data)
        setAuthed(true)
      })
      .catch(() => {})
  }, [])

  async function login(e) {
    e.preventDefault()
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (!res.ok) {
      setNote('Wrong password.')
      return
    }
    setAuthed(true)
    setNote('')
    const data = await fetch('/api/admin/clues').then((r) => r.json())
    setClues(data)
  }

  function update(i, field, value) {
    setClues((list) => list.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)))
  }

  async function save() {
    const res = await fetch('/api/admin/clues', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clues),
    })
    const data = await res.json()
    if (!res.ok) {
      setNote('Save failed.')
      return
    }
    setClues(data)
    setNote('Saved to DynamoDB.')
  }

  async function reset() {
    const data = await fetch('/api/admin/clues', { method: 'DELETE' }).then((r) => r.json())
    setClues(data)
    setNote('Restored defaults in DynamoDB.')
  }

  function add() {
    setClues((list) => [
      ...list,
      { id: 'xxxxx', title: 'New Clue', text: 'Write your clue here.', answer: '', hints: [], nextLocation: '', scene: 'grassland' },
    ])
  }

  if (!authed) {
    return (
      <div className="page">
        <WildlifeScene theme="home" />
        <div className="stack">
          <form className="customize" onSubmit={login}>
            <p className="badge">Admin</p>
            <h1>Sign in</h1>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className="btn" type="submit">Enter</button>
            {note ? <p className="wrong">{note}</p> : null}
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="page customize-page">
      <WildlifeScene theme="home" />
      <div className="stack">
        <div className="customize">
          <p className="badge">Admin</p>
          <h1>Edit clues</h1>
          <p className="home-lead">Saved to DynamoDB. Players only see the next location after a correct guess.</p>
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
                <button type="button" className="ghost-link" onClick={() => setClues((list) => list.filter((_, idx) => idx !== i))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="row">
            <button type="button" className="btn" onClick={save}>Save to DynamoDB</button>
            <button type="button" className="btn secondary" onClick={add}>Add a clue</button>
            <button type="button" className="ghost-link" onClick={reset}>Reset defaults</button>
            <Link className="ghost-link" href="/">Back to camp</Link>
          </div>
          {note ? <p className="note">{note}</p> : null}
        </div>
      </div>
    </div>
  )
}
