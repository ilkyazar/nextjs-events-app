import { getHumanReadableDate } from '../../helpers/date-helper';
import Button from '../ui/button';
import Image from 'next/image';

import classes from './event-item.module.css';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = getHumanReadableDate(date);

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
