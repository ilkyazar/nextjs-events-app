import { hash } from 'bcryptjs';

export async function hashPassword(password) {
  const hashedPasswd = await hash(password, 12);
  return hashedPasswd;
}
