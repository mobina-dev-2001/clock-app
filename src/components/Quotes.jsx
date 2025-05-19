import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import refreshIcon from "../assets/images/icon-refresh.svg"

export default function Quotes({ hidden = false }) {
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const quoteDataResponse = await fetch(
        "/api/quotes",
        { headers: { "X-Api-Key": import.meta.env.VITE_QUOTES_API_KEY } }
      );

      if (!quoteDataResponse.ok) throw new Error("Quote fetch failed");
      const quoteData = await quoteDataResponse.json();
      setQuote(quoteData[0]?.quote || "No quote was found");
      setQuoteAuthor(quoteData[0]?.author || "Unknown");
    } catch (error) {
      console.error("Error: ", error);
      setQuote("Oops! We failed to load a quote; but here's a good one: We are what we repeatedly do. Excellence, then, is not an act, but a habit.");
      setQuoteAuthor("Aristotle");
    } finally { setLoading(false) }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.article initial={false} animate={{ opacity: hidden ? 0 : 1, height: hidden ? 0 : "50%" }} transition={{ duration: 0.5, ease: "easeInOut" }} className="overflow-hidden">
      <figure className="grid grid-cols-[minmax(16.125rem,_33.75rem)_1.5rem] grid-rows-[fit_fit] gap-y-[.813rem] gap-x-[1rem] max-sm:gap-y-[.5rem]" aria-live="polite" aria-atomic="true">

        <blockquote>
          {loading || showLoader ? (
            <div className="space-y-2">{[...Array(3)].map((_, i) => (<div key={`skeleton-${i}`} className="skeleton h-6 bg-white/60 opacity-20"></div>))}</div>
          ) : <q>{quote}</q>}
        </blockquote>

        <figcaption className="font-bold">
          {loading || showLoader ? <div className="skeleton w-[30%] h-6 bg-white/60 opacity-20"></div> : quoteAuthor}
        </figcaption>

        <button className="col-start-2 row-start-1 self-baseline py-[.5rem] cursor-pointer transition-opacity duration-200 ease-in-out opacity-50 hover:opacity-100"
          onClick={fetchQuote} disabled={loading} aria-label="Get a new quote">
          <img className={`w-[1rem] ${loading || showLoader ? "animate-spin" : ""}`}
            src={refreshIcon} alt="Refresh icon" />
        </button>
        
      </figure>
    </motion.article>
  );
}
