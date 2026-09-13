'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { matchesAnswer } from '../lib/defaults.js'
import Scroll from './Scroll.jsx'
import WildlifeScene from './WildlifeScene.jsx'

function solvedKey(id) {
  return `acpet-solved:${id}`
}

export default function ClueView({ clue, id }) {
  const [guess, setGuess] = useState('')
  const [hintCount, setHintCount] = useState(0)
  const [solved, setSolved] = useState(false)
  const [nextLocation, setNextLocation] = useState('')
  const [wrong, setWrong] = useState(false)

  useEffect(() => {
    setGuess('')
    setHintCount(0)
    setWrong(false)
    if (!clue) {
      setSolved(false)
      setNextLocation('')
      return
    }
    const raw = sessionStorage.getItem(solvedKey(clue.id))
    if (raw !== null) {
      setSolved(true)
      setNextLocation(raw)
    } else {
      setSolved(false)
      setNextLocation('')
    }
  }, [clue])

  if (!clue) {
    return (
      <div className="page">
        <WildlifeScene theme="home" />
        <div className="stack">
          <div className="home-panel">
            <h1 className="home-title">This trail went cold</h1>
            <p className="home-lead">No clue lives at /{id}. Check the code with your guide.</p>
            <Link className="btn" href="/">Back to camp</Link>
          </div>
        </div>
      </div>
    )
  }

  const hints = clue.hints ?? []

  function submit(e) {
    e.preventDefault()
    if (matchesAnswer(guess, clue.answer)) {
      const place = clue.nextLocation || ''
      sessionStorage.setItem(solvedKey(clue.id), place)
      setNextLocation(place)
      setSolved(true)
      setWrong(false)
      return
    }
    setWrong(true)
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
              {nextLocation ? (
                <>
                  <p className="home-lead">Go to this location. The next trail is waiting there.</p>
                  <p className="next-id">{nextLocation}</p>
                  {clue.locationPhoto ? (
                    <img className="location-photo" src={clue.locationPhoto} alt={nextLocation} />
                  ) : null}
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
          <Link className="ghost-link" href="/">Camp</Link>
        </div>
      </div>
    </div>
  )
}
