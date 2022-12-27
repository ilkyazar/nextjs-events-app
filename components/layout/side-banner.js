import classes from './side-banner.module.css';

function SideBanner(props) {
  return (
    <div className={classes.content}>
      <div className={classes.banner}>
        <h1>Discover events from all around the world.</h1>
      </div>
      {props.children}
    </div>
  );
}

export default SideBanner;
