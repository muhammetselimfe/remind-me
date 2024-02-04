import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import NewReminder, { action as newReminderAction } from './routes/NewReminder.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Reminders, { loader as remindersLoader } from './routes/Reminders.jsx'
import ReminderDetails, {loader as reminderDetailsLoader} from './routes/ReminderDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Reminders />,
        loader: remindersLoader,
        children: [
          { path: '/create-reminder', element: <NewReminder />, action: newReminderAction },
          { path: '/:id', element: <ReminderDetails />, loader: reminderDetailsLoader },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
