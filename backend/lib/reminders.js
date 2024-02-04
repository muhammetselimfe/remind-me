const fs = require('node:fs/promises');

async function getSavedReminders() {
  const rawFileContent = await fs.readFile('reminders.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const reminders = data.reminders ?? [];
  return reminders;
}

function saveReminders(reminders) {
  return fs.writeFile('reminders.json', JSON.stringify({ reminders: reminders || [] }));
}

exports.getSavedReminders = getSavedReminders;
exports.saveReminders = saveReminders;
