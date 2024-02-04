import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './ReminderDetails.module.css';

function ReminderDetails() {
  const reminder = useLoaderData();

  if (!reminder) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find reminder</h1>
          <p>Unfortunately, the requested reminder could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{reminder.author}</p>
        <p className={classes.text}>{reminder.body}</p>
      </main>
    </Modal>
  );
}

export default ReminderDetails

export async function loader({params}) {
    const response = await fetch('http://localhost:8080/reminders/' + params.id)
    const resData = await response.json()
    return resData.reminder
}
