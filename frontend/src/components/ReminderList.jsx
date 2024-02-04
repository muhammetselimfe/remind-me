import Reminder from './Reminder'
import classes from './ReminderList.module.css'
import { useLoaderData } from 'react-router-dom'

function ReminderList() {
  const reminders = useLoaderData()

  return (
    <>
      {reminders.length > 0 && (
        <ul className={classes.reminders}>
          {reminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              id={reminder.id}
              date={reminder.date}
              body={reminder.body}
            />
          ))}
        </ul>
      )}
      {reminders.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no reminders yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default ReminderList
