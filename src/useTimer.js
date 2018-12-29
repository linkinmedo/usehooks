import { useState, useEffect } from 'react';

export default function useTimer (initialTime) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000)
    return () => clearInterval(interval);
  }, [initialTime])

  return time;
}
