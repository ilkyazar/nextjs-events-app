import { connectToDatabase } from '../lib/db';

const client = await connectToDatabase();

const db = client.db();

export async function getAllEvents() {
  try {
    const result = await db
      .collection(process.env.mongodb_collection)
      .find({}, { limit: 10 })
      .toArray();

    const featuredEvents = JSON.parse(JSON.stringify(result));
    return featuredEvents;
  } catch (e) {
    console.log(e);
  }
}

export async function getFeaturedEvents() {
  try {
    const result = await db
      .collection(process.env.mongodb_collection)
      .find({ isFeatured: true }, { limit: 10 })
      .toArray();

    const featuredEvents = JSON.parse(JSON.stringify(result));
    return featuredEvents;
  } catch (e) {
    console.log(e);
  }
}
