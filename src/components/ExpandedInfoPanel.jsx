import { motion, AnimatePresence } from "framer-motion";
import { getDayOfYear, getWeekNumber, getDayOfWeek } from "../utils/timeUtils";

export default function ExpandedInfoPanel({ expanded, daytime, timezone }) {
  const dayOfYear = getDayOfYear(timezone);
  const weekNumber = getWeekNumber(timezone);
  const dayOfWeek = getDayOfWeek(timezone);

  const infoStyles = "block text-[clamp(1.25rem,_4vw,_3.5rem)] font-bold normal-case tracking-normal";

  return (
    <AnimatePresence>
      {expanded && (
        <motion.section initial={{ y: "100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ y: "100%", opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 grid grid-cols-[clamp(1.625rem,_12vw,_10.313rem)_1fr_clamp(1.625rem,_12vw,_10.313rem)] grid-rows-[clamp(1.979rem,_5vw,_3rem)_1fr_clamp(1.979rem,_5vw,_3rem)] w-full h-[clamp(39vh,_24vw,_48vh)] backdrop-blur text-[clamp(.625rem,_1.5vw,_.938rem)] uppercase tracking-[3px] max-sm:tracking-[2px] 
          ${daytime ? "bg-white/75 text-mine-shaft" : "bg-black/75 text-white"}`}
          aria-hidden={!expanded} tabIndex={expanded ? "1" : "-1"}>

          <div className="grid col-start-2 row-start-2 grid-cols-[1fr_.55fr_1fr] max-md:grid-cols-2 max-md:gap-x-20 max-sm:grid-cols-1">

            <div className="grid gap-[2vw] max-sm:gap-0">
              <p className="max-sm:flex max-sm:justify-between max-sm:items-center">
                <span>Current Timezone</span>
                <span className={infoStyles}>{timezone}</span>
              </p>
              <p className="max-sm:flex max-sm:justify-between max-sm:items-center">
                <span>Day of the Year</span>
                <span className={infoStyles}>{dayOfYear}</span>
              </p>
            </div>

            <div className="justify-self-center border-l-1 border-white/25 max-md:hidden"></div>

            <div className="grid gap-[2vw] max-sm:gap-0">
              <p className="max-sm:flex max-sm:justify-between max-sm:items-center">
                <span>Day of the Week</span>
                <span className={infoStyles}>{dayOfWeek}</span>
              </p>
              <p className="max-sm:flex max-sm:justify-between max-sm:items-center">
                <span>Week Number</span>
                <span className={infoStyles}>{weekNumber}</span>
              </p>
            </div>
            
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
