"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const format = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: profile.timeZone,
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

// Rendered on the client only, so server and browser clocks never disagree.
const LocalTime = ({ suffix = " WAT" }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <time suppressHydrationWarning>
      {time ?? "--:--"}
      {suffix}
    </time>
  );
};

export default LocalTime;
