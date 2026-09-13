import { defaultClues } from '../../../../lib/defaults.js'
import { loadClues, saveClues } from '../../../../lib/db.js'

export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json(await loadClues())
}

export async function PUT(req) {
  const clues = await req.json()
  if (!Array.isArray(clues)) return Response.json({ error: 'invalid' }, { status: 400 })
  const cleaned = clues
    .map((c) => ({
      id: String(c.id || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .slice(0, 5),
      title: String(c.title || '').trim(),
      text: c.text ?? '',
      answer: c.answer ?? '',
      hints: String(c.hintsText ?? (c.hints ?? []).join('\n'))
        .split('\n')
        .map((h) => h.trim())
        .filter(Boolean),
      nextLocation: String(c.nextLocation || '').trim(),
      locationPhoto: String(c.locationPhoto || '').trim(),
      scene: c.scene || 'grassland',
    }))
    .filter((c) => c.id)
  try {
    await saveClues(cleaned)
    return Response.json(cleaned)
  } catch (err) {
    console.error('DynamoDB saveClues failed', err)
    return Response.json({ error: 'save failed' }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    await saveClues(defaultClues)
    return Response.json(defaultClues)
  } catch (err) {
    console.error('DynamoDB reset failed', err)
    return Response.json(defaultClues)
  }
}
