import dayjs from "dayjs";
import { useEffect, useState } from "react";

/** Current time, refreshed at the start of every minute. */
const useMinuteClock = () => {
  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    let interval: number | undefined;
    const timeout = window.setTimeout(
      () => {
        setNow(dayjs());
        interval = window.setInterval(() => setNow(dayjs()), 60_000);
      },
      60_000 - (Date.now() % 60_000),
    );

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return now;
};

export default useMinuteClock;
