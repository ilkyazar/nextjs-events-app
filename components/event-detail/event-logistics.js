import AddressIcon from '../ui/icons/address-icon';
import DateIcon from '../ui/icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import { getHumanReadableDate } from '../../helpers/date-helper';
import Image from 'next/image';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = getHumanReadableDate(date);

  return (
    <div className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={300}
          height={300}
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </div>
  );
}

export default EventLogistics;
