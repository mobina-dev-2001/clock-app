import upwardArrow from "../assets/images/icon-arrow-up.svg"
import downwardArrow from "../assets/images/icon-arrow-down.svg"

export default function ToggleButton({ expanded, onClick }) {
    return (
      <div className="flex justify-end items-center gap-[.5rem] w-[clamp(7.188rem,_15vw,_9.125rem)] p-[clamp(.25rem,_.75vw,_.5rem)] bg-white rounded-[1.75rem]">
        <p className="text-black/50 text-[clamp(.75rem,_2vw,_1rem)] font-bold uppercase tracking-[5px] max-md:tracking-[3.75px]">
          {expanded ? "Less" : "More"}
        </p>
        <button
          className="grid place-items-center size-[clamp(2rem,_3vw,_2.5rem)] aspect-square bg-mine-shaft rounded-full cursor-pointer transition-colors duration-200 ease-in-out hover:bg-dusty-gray"
          onClick={onClick}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse additional information" : "Expand additional information"}
        >
          <img 
            src={expanded ? upwardArrow : downwardArrow} 
            alt="" 
            aria-hidden="true"
          />
        </button>
      </div>
    );
  }

  