import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full border border-border
        bg-surface/80 text-primary backdrop-blur-md
        shadow-neon transition-all duration-300 ease-out
        hover:scale-110 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}
      `}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}