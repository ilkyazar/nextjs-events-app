import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: 'Invalid - password should be at least 7 characters',
    });
    return;
  }

  console.log(process.env.mongodb_collection);

  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password);

  const result = await db
    .collection(process.env.mongodb_collection)
    .insertOne({
      email: email,
      password: hashedPassword,
    });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
