import Button from '../ui/button';
import classes from './starting-page.module.css';

function StartingPageContent() {
  return (
    <section className={classes.starting}>
      <h1>Welcome!</h1>
      <Button>Click me</Button>
    </section>
  );
}

export default StartingPageContent;
