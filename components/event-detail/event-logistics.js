import AddressIcon from '../ui/icons/address-icon';
import DateIcon from '../ui/icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import { getHumanReadableDate } from '../../lib/date-helper';
import { getFormattedAddress } from '../../lib/address-helper';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = getHumanReadableDate(date);
  const addressText = getFormattedAddress(address);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
