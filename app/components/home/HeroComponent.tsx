"use client";
import { ChevronDown } from "lucide-react";

export default function HeroComponent() {
  const handleScrollDown = () => {
    // preferred target
    const target =
      document.getElementById("next-section") ||
      // fallback: the element immediately after the hero container
      document.querySelector("#hero")?.nextElementSibling ||
      // last resort: scroll one viewport down
      null;

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll one viewport height down
      window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="relative h-[40vh] md:h-[40vh] lg:h-screen overflow-hidden">
      {/* Fixed video background */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="lg:fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Black overlay: pointer-events-none allows clicks to pass through */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Scroll Down Arrow */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="cursor-pointer absolute bottom-6 left-1/2 -translate-x-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white animate-bounce"
      >
        <ChevronDown className="w-5 md:w-10 h-5 md:h-10" />
      </button>
    </div>
  );
}
