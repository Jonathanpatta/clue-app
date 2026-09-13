'use client'

import { useEffect, useState } from 'react'

export default function Scroll({ title, text }) {
  const [shown, setShown] = useState('')

  useEffect(() => {
    setShown('')
    let i = 0
    const id = setInterval(() => {
      i += 2
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 12)
    return () => clearInterval(id)
  }, [text])

  return (
    <article className="scroll-wrap">
      <div className="rod top-rod" />
      <div className="scroll">
        <div className="scroll-inner">
          <p className="scroll-kicker">ACPET · Wildlife trail</p>
          <h1 className="scroll-title">{title}</h1>
          <p className="scroll-body">
            {shown}
            {shown.length < text.length ? <span className="caret">✦</span> : null}
          </p>
        </div>
      </div>
      <div className="rod bottom-rod" />
    </article>
  )
}
