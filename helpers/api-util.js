import { connectToDatabase } from '../lib/db';

const client = await connectToDatabase();

const eventsCollection = client
  .db()
  .collection(process.env.mongodb_collection);

export async function getAllEvents() {
  try {
    const result = await eventsCollection
      .find({}, { limit: 20 })
      .toArray();

    return JSON.parse(JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
}

export async function getFeaturedEvents() {
  try {
    const result = await eventsCollection
      .find({ isFeatured: true }, { limit: 10 })
      .toArray();

    return JSON.parse(JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
}

export async function getEventById(id) {
  try {
    const event = await eventsCollection.findOne({ id: id });

    return JSON.parse(JSON.stringify(event));
  } catch (e) {
    console.log(e);
  }
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  try {
    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month - 1
      );
    });

    return filteredEvents;
  } catch (e) {
    console.log(e);
  }
}
