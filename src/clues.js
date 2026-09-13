// ============================================================
//  ACPET SCAVENGER HUNT — EDIT YOUR CLUES HERE
//
//  id     = 5-character route.  id: "k8v3q"  means the page is /k8v3q
//  title  = heading on the scroll
//  text   = the clue body
//  answer = what the player must type (case/accents ignored)
//  hints  = any number of hint strings; revealed one at a time
//  scene  = wildlife habitat backdrop (grassland | rainforest | wetland |
//           highland | monsoon | dusk)
//
//  nextLocation = place to walk to after a correct answer (not the next slug)
//  You can also edit these in the browser at  /customize
// ============================================================

export const defaultClues = [
  {
    id: 'k8v3q',
    title: 'The Unbuilt Roof',
    text: `I am a roof no architect designed.
I intercept the sun but own no solar panel.
I shelter thousands without walls,
and disappear when the axes arrive.
What am I?`,
    answer: 'canopy',
    hints: ['Nature built this penthouse before humans did.'],
    nextLocation: 'Infinity Pool',
    scene: 'grassland',
  },
  {
    id: 'n2p7w',
    title: 'The Counted Ghost',
    text: `Buried, I helped build an industrial age.
Released, I help warm another.
Trees take me in,
governments try to price me,
and researchers spend careers counting me.
What am I?`,
    answer: 'carbon',
    hints: ['I can be a footprint without having feet.'],
    nextLocation: 'Fitness Centre',
    scene: 'rainforest',
  },
  {
    id: 'b9x4m',
    title: 'The Caffeinated Species',
    text: `I survive largely on caffeine,
migrate frequently between meetings,
and become unusually aggressive when someone says,
“I couldn't find the source for that number.”
What species am I?`,
    answer: 'researcher',
    hints: ['The answer is closer than you think.'],
    nextLocation: 'Nivālaya',
    scene: 'wetland',
  },
  {
    id: 'j5h1c',
    title: 'The Midnight Chase',
    text: `I am not a predator,
yet researchers run when I approach.
I have never physically harmed anyone,
but somehow I cause people to work at 11:59 PM.
What am I?`,
    answer: 'deadline',
    hints: ['Think morbid.'],
    nextLocation: 'Kosi River',
    scene: 'highland',
  },
  {
    id: 'r6t8d',
    title: 'The Unliving Habitat',
    text: `I have cells but I am not alive.
I have sheets but I am not a bed.
Researchers enter my habitat confidently
and emerge three hours later wondering
if this is a date or not.
What am I?`,
    answer: 'excel',
    hints: ['Synonym of success.'],
    nextLocation: 'Location 5',
    scene: 'monsoon',
  },
  {
    id: 'f3y7s',
    title: 'The Senior Employee',
    text: `Millions of years old,
responsible for a great deal of energy,
and increasingly being asked when I plan to retire.
Basically, I am the senior-most employee
in the energy sector.
What am I?`,
    answer: 'coal',
    hints: ['I’m dug up before I’m burned up.'],
    nextLocation: 'Location 6',
    scene: 'dusk',
  },
]

const STORAGE_KEY = 'acpet-clues-v4'

export function normalizeAnswer(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function matchesAnswer(guess, answer) {
  return normalizeAnswer(guess) === normalizeAnswer(answer)
}

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

export function getClue(id) {
  return getClues().find((c) => c.id.toLowerCase() === String(id).toLowerCase())
}

export function getNextClue(id) {
  const clues = getClues()
  const i = clues.findIndex((c) => c.id.toLowerCase() === String(id).toLowerCase())
  if (i === -1 || i === clues.length - 1) return null
  return clues[i + 1]
}

export function upsertClue(id, patch) {
  const clues = getClues()
  const i = clues.findIndex((c) => c.id.toLowerCase() === String(id).toLowerCase())
  if (i === -1) return clues
  const next = clues.map((c, idx) => (idx === i ? { ...c, ...patch } : c))
  saveClues(next)
  return next
}
