import { getHumanReadableDateWithoutDay } from '../../lib/date-helper';
import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = getHumanReadableDateWithoutDay(date);

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
