import { getAllEvents } from '../../dummy-events-data';
import EventList from '../../components/events/event-list';
import { getSession } from 'next-auth/react';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function searchEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
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
