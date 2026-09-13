import { findClue } from '../../lib/db.js'
import ClueView from '../../components/ClueView.jsx'

export default async function CluePage({ params }) {
  const { id } = await params
  const clue = await findClue(id)
  return <ClueView clue={clue} id={id} />
}
