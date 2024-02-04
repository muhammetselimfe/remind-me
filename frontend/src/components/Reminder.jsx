import { Link } from 'react-router-dom'
import classes from './Reminder.module.css'

function Reminder({ id, date, body }) {
  return (
    <li className={classes.reminder}>
      <Link to={id}>
        <p className={classes.date}> {date} </p>
        <p className={classes.text}> {body} </p>
      </Link>
    </li>
  )
}

export default Reminder
