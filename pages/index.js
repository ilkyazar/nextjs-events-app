import Head from 'next/head';
import EventList from '../components/events/event-list';
import SideBanner from '../components/layout/side-banner';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next.js Events App - Home Page</title>
        <meta
          name="description"
          content="Discover events from all around the world"
        />
      </Head>
      <SideBanner>
        <EventList items={props.featuredEvents} />
      </SideBanner>
    </div>
  );
}

/*
  This page that renders the featured events
  should be understood by search engine crawlers.
  So that, visitors are directed to the site.

  It is not likely that this data changes frequently.
  Then, there is no reason to load it on the client.
  This is not user specific data.

  As a result, a pre-rendering method should be used.
  SSR is not needed, because there is no need to 
  pre-render it for every incoming request.

  This is why it is chosen to use getStaticProps.
  It is suitable to pre-render the page
  during the build time.

  Revalidate is set to get the mostly updated content.
*/

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
