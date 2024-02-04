import { Outlet } from 'react-router-dom'
import ReminderList from '../components/ReminderList'

function Reminders() {
  return (
    <>
      <Outlet />
      <main>
        <ReminderList />
      </main>
    </>
  )
}

export default Reminders

export async function loader(){
  const response = await fetch('http://localhost:8080/reminders')
  const resData = await response.json()
  return resData.reminders
}
