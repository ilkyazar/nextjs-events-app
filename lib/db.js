import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const connectionStr = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.5pdti.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectionStr);
  return client;
}
