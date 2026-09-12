// ============================================================
//  ACPET SCAVENGER HUNT — EDIT YOUR CLUES HERE
//
//  slug  = the page route.  slug: "tiger"  means the page is /tiger
//  title = the heading on the scroll
//  text  = the clue body (use `backticks` for multi-line text)
//
//  You can also edit these in the browser at  /customize
//  (browser edits are saved on this device; this file is the default.)
// ============================================================

export const defaultClues = [
  {
    slug: 'tiger',
    title: 'The Sun Tiger',
    text: `I wear stripes of living fire and hunt where the grass drinks gold.
The sun is my battery — when the sky’s solar panels dim, I nap in the shade of giant leaves.

Find the orange bloom that never wilts, and look for the paw print that glows at noon.`,
  },
  {
    slug: 'eagle',
    title: 'The Wind Rider',
    text: `I ride rivers of air the way salmon ride water.
My wings are turbines. Every thermal is a gift of wild energy.

Climb where the wind sings through stone, and follow the feather that refuses to fall.`,
  },
  {
    slug: 'wolf',
    title: 'The Pack Grid',
    text: `Alone I am a spark. Together we are a power grid.
Howl with me at the lights that dance in the north — they are the sky’s own current.

Listen for the chorus. The next path opens only when many voices join one.`,
  },
  {
    slug: 'owl',
    title: 'The Night Battery',
    text: `When the sun clocks out, I clock in.
My eyes are lanterns. The forest charges itself in moonlight, and I keep the night watch.

Seek the tree with a lantern in its heart, and wait for the whooo of stored energy waking.`,
  },
  {
    slug: 'fox',
    title: 'The Clever Spark',
    text: `I steal warmth from the last of autumn’s sun.
Quick as a flicker, I bury energy for later — a battery in red fur.

Follow the trail of fallen gold. The cleverest cache is hidden under the brightest leaf.`,
  },
  {
    slug: 'bear',
    title: 'The Hydro Giant',
    text: `I fish the river that never stops spinning.
Water is my power plant. Salmon are my sparks. When I sleep, I store a whole season of sun.

Find the pool where the current draws a circle, and look for the claw that points downstream.`,
  },
  {
    slug: 'firefly',
    title: 'The Living Lantern',
    text: `I am a tiny power plant with wings.
No wires. No plugs. Just a belly full of light, blinking in a language only the meadow knows.

Count seven flashes in a row. The next clue hides where the last spark lands.`,
  },
]

const STORAGE_KEY = 'acpet-clues'

export function getClues() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length) return parsed
    }
  } catch {
    /* ponytail: ignore bad localStorage and fall back to defaults */
  }
  return defaultClues
}

export function saveClues(clues) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clues))
}

export function resetClues() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getClue(slug) {
  return getClues().find((c) => c.slug.toLowerCase() === slug.toLowerCase())
}

export function upsertClue(slug, patch) {
  const clues = getClues()
  const i = clues.findIndex((c) => c.slug.toLowerCase() === slug.toLowerCase())
  if (i === -1) return clues
  const next = clues.map((c, idx) => (idx === i ? { ...c, ...patch } : c))
  saveClues(next)
  return next
}
