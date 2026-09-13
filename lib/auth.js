import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

function secret() {
  return process.env.ADMIN_PASSWORD || ''
}

export function tokenFor(password) {
  return createHmac('sha256', secret()).update(password).digest('hex')
}

function safeEq(a, b) {
  const left = Buffer.from(String(a))
  const right = Buffer.from(String(b))
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

export async function isAdmin() {
  const pass = secret()
  if (!pass) return false
  const jar = await cookies()
  const token = jar.get('admin')?.value
  return Boolean(token && safeEq(token, tokenFor(pass)))
}

export function loginOk(password) {
  const pass = secret()
  return Boolean(pass && safeEq(password, pass))
}
