import { loadClues } from '../../lib/db.js'
import ClueView from '../../components/ClueView.jsx'

export const dynamic = 'force-dynamic'

export default async function CluePage({ params }) {
  const { id } = await params
  const clues = await loadClues()
  const clue = clues.find((c) => c.id.toLowerCase() === String(id).toLowerCase()) || null
  const last = Boolean(clue && clues.at(-1)?.id.toLowerCase() === clue.id.toLowerCase())
  return <ClueView clue={clue} id={id} last={last} />
}
