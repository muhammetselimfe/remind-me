import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Remind ME!
      </h1>
      <p>
        <Link to='/create-reminder' className={classes.button}>
          <MdPostAdd size={18} />
          New Reminder
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
