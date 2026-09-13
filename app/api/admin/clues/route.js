import { isAdmin } from '../../../../lib/auth.js'
import { defaultClues } from '../../../../lib/defaults.js'
import { loadClues, saveClues } from '../../../../lib/db.js'

export async function GET() {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })
  return Response.json(await loadClues())
}

export async function PUT(req) {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })
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
      scene: c.scene || 'grassland',
    }))
    .filter((c) => c.id)
  await saveClues(cleaned)
  return Response.json(cleaned)
}

export async function DELETE() {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })
  await saveClues(defaultClues)
  return Response.json(defaultClues)
}
