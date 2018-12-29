import { useState, useEffect } from "react";

export default function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time <= 0) {
        clearInterval(interval);
        return;
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return time;
}
