import classes from './NewReminder.module.css'
import Modal from '../components/Modal'
import { Link, Form, redirect } from 'react-router-dom'

function NewReminder() {

  return (
    <Modal>
      <Form method='post' className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body' required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Date</label>
          <input
            type="date"
            id="name"
            name='date'
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NewReminder

export async function action({request}) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch('http://localhost:8080/reminders', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return redirect('/')
  
}
