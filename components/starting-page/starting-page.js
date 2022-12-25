import { getFeaturedEvents } from '../../dummy-events-data';
import EventList from '../events/event-list';
import classes from './starting-page.module.css';

function StartingPageContent() {
  const featuredEvents = getFeaturedEvents();

  return (
    <section className={classes.starting}>
      <EventList items={featuredEvents} />
    </section>
  );
}

export default StartingPageContent;
