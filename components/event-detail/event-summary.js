import classes from './event-summary.module.css';

function EventSummary(props) {
  const { image, imageAlt, title } = props;

  return (
    <section className={classes.summary}>
      <img src={`/${image}`} alt={imageAlt} />
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
