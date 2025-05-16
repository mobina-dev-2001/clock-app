import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TimeDisplay({ timezone, timezoneCode }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {setCurrentTime(new Date())}, 60000);
    return () => clearInterval(timer);
  }, []);

  const timeFormatter = new Intl.DateTimeFormat(undefined, { timeZone: timezone, hour: "2-digit", minute: "2-digit", hour12: false });
  const formattedTime = useMemo(() => {
    return timeFormatter.format(currentTime);
  }, [currentTime, timezone]);

  return (
    <span className="flex items-baseline gap-[.688rem] font-bold">
      <AnimatePresence mode="wait">
        <motion.span key={formattedTime} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block">
          {formattedTime}
        </motion.span>
      </AnimatePresence>
      <span className="text-[clamp(.938rem,_3vw,_2.5rem)] font-light tracking-normal">
        {timezoneCode}
      </span>
    </span>
  );
}
