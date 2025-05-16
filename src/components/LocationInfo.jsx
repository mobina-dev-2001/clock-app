export default function LocationInfo({ city, country }) {
  if (!city || !country) return null;

  return (
    <span className="text-[clamp(.938rem,_2vw,_1.5rem)] font-bold tracking-[5px] max-sm:tracking-[3px]">
      in {city}, {country}
    </span>
  );
}
