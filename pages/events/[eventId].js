import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import {
  getFeaturedEvents,
  getEventById,
} from '../../helpers/api-util';
import Head from 'next/head';

function EventDetailPage(props) {
  if (!props.event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{props.event.title}</title>
        <meta
          name="description"
          content="Discover events from all around the world"
        />
      </Head>
      <EventSummary
        image={props.event.image}
        imageAlt={props.event.title}
        title={props.event.title}
      />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>
        <p>{props.event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  // Getting all events might be redundant here.
  // Featured events are more likely to be visited.

  const events = await getFeaturedEvents();
  const paths = events.map((e) => ({ params: { eventId: e.id } }));

  return {
    paths: paths,
    fallback: true,
    // If fallback is blocking, Next.js won't serve anything until
    // page is fully generated.
  };
}

export default EventDetailPage;
