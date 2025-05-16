import { useState } from "react";
import Quotes from "./components/Quotes";
import Clock from "./components/Clock";

export default function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="col-start-2 row-start-2 w-full">
      <Quotes hidden={expanded} />
      <Clock expanded={expanded} setExpanded={setExpanded} />
    </section>
  );
}
