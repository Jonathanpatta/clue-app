import { loginOk, tokenFor } from '../../../../lib/auth.js'

export async function POST(req) {
  const body = await req.json().catch(() => ({}))
  if (!loginOk(body.password || '')) {
    return Response.json({ ok: false }, { status: 401 })
  }
  const res = Response.json({ ok: true })
  res.headers.append(
    'Set-Cookie',
    `admin=${tokenFor(body.password)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`,
  )
  return res
}
