import { useEffect, useState } from 'react';

const IST_TIME_FORMAT = new Intl.DateTimeFormat('en-IN', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

export default function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return <div className="clock-panel" aria-label="Current time in India Standard Time">
    <span className="clock-label">CURRENT TIME</span>
    <strong>{IST_TIME_FORMAT.format(now)}</strong>
    <span className="clock-zone"><i /> IST • INDIA</span>
  </div>;
}
