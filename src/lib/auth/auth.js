import { hash, compare } from 'bcrypt'

export async function hashedPassword(password) {
  const hashedPassword = await hash(password, 0)
  return hashedPassword
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword)
  return isValid
}
