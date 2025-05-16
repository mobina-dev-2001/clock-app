export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-ring size-20 max-sm:size-15"></span>
        <p className="text-white/80 tracking-wider">
          Detecting your location...
        </p>
      </div>
    </div>
  );
}
