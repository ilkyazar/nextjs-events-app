import { getAllEvents } from '../../dummy-events-data';
import EventList from '../../components/events/event-list';
import { getSession } from 'next-auth/react';

function AllEventsPage() {
  const allEvents = getAllEvents();

  return <EventList items={allEvents} />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AllEventsPage;
