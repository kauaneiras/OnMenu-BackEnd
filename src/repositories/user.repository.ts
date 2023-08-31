import { db } from "../config/database";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface Session {
  id: number;
  token: string;
  user_id: number;
}

interface TokenToResetPassword {
  id: number;
  token: string;
  user_id: number;
}

async function checkIfUserExists(email: string): Promise<User | null> {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0] || null;
}

async function createUser(name: string, email: string, password: string): Promise<void> {
  await db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password]
  );
}

async function createSession(token: string, user_id: number): Promise<void> {
  await db.query(
    "INSERT INTO sessions (token, user_id) VALUES ($1, $2)",
    [token, user_id]
  );
}

async function checkIfSessionExists(token: string): Promise<Session | null> {
  const result = await db.query("SELECT * FROM sessions WHERE token = $1", [token]);
  return result.rows[0] || null;
}

async function logout(token: string): Promise<void> {
  await db.query("DELETE FROM sessions WHERE token = $1", [token]);
}

async function changepassword(password: string, id: number): Promise<void> {
  await db.query("UPDATE users SET password = $1 WHERE id = $2", [password, id]);
}

async function checkIfTokenExists(token: string): Promise<TokenToResetPassword | null> {
  const result = await db.query("SELECT * FROM resetpassword WHERE token = $1", [token]);
  return result.rows[0] || null;
}

async function createTokenToResetPassword(token: string, user_id: number): Promise<void> {
  await db.query("INSERT INTO resetpassword (token, user_id) VALUES ($1, $2)", [token, user_id]);
}

export {
  checkIfUserExists,
  createUser,
  createSession,
  checkIfSessionExists,
  logout,
  changepassword,
  checkIfTokenExists,
  createTokenToResetPassword
};
