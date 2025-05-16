import sunIcon from "../assets/images/icon-sun.svg"
import moonIcon from "../assets/images/icon-moon.svg"

export default function Greeting({ timeOfDay, daytime }) {
  const greetings = { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening" };

  return (
    <span className="text-[clamp(.938rem,_2vw,_1.25rem)] tracking-[4px] max-sm:tracking-[3px]">
      <img className="inline-block mr-[1rem]"
        src={daytime ? sunIcon : moonIcon}
        alt={daytime ? "Sun icon" : "Moon icon"}
        aria-hidden="true" />
      {greetings[timeOfDay]}
      <span className="max-sm:hidden">, it's currently</span>
    </span>
  );
}
