import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Ipbase from "@everapi/ipbase-js";
import { isDaytime, getTimeOfDay } from "../utils/timeUtils";
import { useBodyClass } from "../utils/useBodyClass";
import Loader from "./Loader";
import Greeting from "./Greeting";
import TimeDisplay from "./TimeDisplay";
import LocationInfo from "./LocationInfo";
import ToggleButton from "./ToggleButton";
import ExpandedInfoPanel from "./ExpandedInfoPanel";

export default function Clock({ expanded, setExpanded }) {
  const [ipInfo, setIpInfo] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());
  const [daytime, setDaytime] = useState(isDaytime());
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState(null);

  useBodyClass(daytime ? "bg-day" : "bg-night");

  // Fetching user's IP information
  useEffect(() => {
    const fetchIpInfo = async () => {
      setLoading(true);
      setError(null);
      const cachedIpInfo = sessionStorage.getItem("ipInfo");

      if (cachedIpInfo) {
        setIpInfo(JSON.parse(cachedIpInfo));
        setLoading(false);
        return;
      }

      try {
        const ipbase = new Ipbase(import.meta.env.VITE_IPBASE_API_KEY);
        const res = await ipbase.info();
        setIpInfo(res.data);
        sessionStorage.setItem("ipInfo", JSON.stringify(res.data));
      } catch (err) {
        console.error("IP detection failed: ", err);
        setError(
          "We couldn't detect your location. Showing default timezone (UTC)."
        );
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchIpInfo, 500);
    return () => clearTimeout(debounceTimer);
  }, []);

  const userCountry = ipInfo?.location?.country?.name;
  const userCity = ipInfo?.location?.city?.name;
  const userTimezone = ipInfo?.timezone?.id;
  const userTimezoneCode = ipInfo?.timezone?.code;

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(null), 5000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => {
    const updateTimeState = () => {
      setTimeOfDay(getTimeOfDay(userTimezone));
      setDaytime(isDaytime(userTimezone));
    };
    updateTimeState();
    const timer = setInterval(updateTimeState, 60000);
    return () => clearInterval(timer);
  }, [userTimezone]);

  return (
    <>
      {(loading || showLoader) && <Loader />}

      <motion.section initial={false} animate={{y: expanded ? 0 : 0, marginTop: expanded ? 0 : "auto"}} transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-between items-end h-max max-lg:flex-col max-lg:items-start max-lg:gap-[clamp(4rem,_8vw,_5rem)]">

        {error && (<div className="alert alert-error alert-soft absolute top-2 left-1/2 -translate-x-1/2 animate-fade-in" role="alert"><span>{error}</span></div>)}

        <h1 className="grid text-[clamp(6.25rem,_14vw,_12.5rem)] uppercase tracking-[-5px] max-sm:tracking-[-2.5px] leading-[1.18]">
          <Greeting daytime={daytime} timeOfDay={timeOfDay} />
          <TimeDisplay timezone={userTimezone} timezoneCode={userTimezoneCode} />
          <LocationInfo country={userCountry} city={userCity} />
        </h1>

        <ToggleButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)} />
        <ExpandedInfoPanel expanded={expanded} timezone={userTimezone} daytime={daytime} />
        
      </motion.section>
    </>
  );
}
