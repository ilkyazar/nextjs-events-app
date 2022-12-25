import { getFeaturedEvents } from '../../dummy-events-data';
import classes from './starting-page.module.css';

function StartingPageContent() {
  const featuredEvents = getFeaturedEvents();

  return (
    <section className={classes.starting}>
      <ul></ul>
    </section>
  );
}

export default StartingPageContent;
