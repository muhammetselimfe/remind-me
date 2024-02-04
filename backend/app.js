const express = require('express');
const bodyParser = require('body-parser');

const { getSavedReminders, saveReminders } = require('./lib/reminders');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/reminders', async (req, res) => {
  const savedReminders = await getSavedReminders();
  res.json({ reminders: savedReminders });
});

app.get('/reminders/:id', async (req, res) => {
  const savedReminders = await getSavedReminders();
  const reminder = savedReminders.find((reminder) => reminder.id === req.params.id);
  res.json({ reminder });
});

app.post('/reminders', async (req, res) => {
  const existingReminders = await getSavedReminders();
  const reminderData = req.body;
  const newReminder = {
    ...reminderData,
    id: Math.random().toString(),
  };
  const updatedReminders = [newReminder, ...existingReminders];
  await saveReminders(updatedReminders);
  res.status(201).json({ message: 'Saved new reminder.', reminder: newReminder });
});

app.listen(8080);
