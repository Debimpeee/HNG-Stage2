const currentUTCDate = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const utcDayOfWeek = daysOfWeek[currentUTCDate.getUTCDay()];

const utcTime = currentUTCDate.toISOString().split('T')[1].split('.')[0];

document.getElementById('utc-day-of-week').textContent = utcDayOfWeek;
document.getElementById('utc-time').textContent = utcTime;

