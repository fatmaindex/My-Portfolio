import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/utils/shared";
import { profile } from "@/data/portfolioData";
import fatmaLogo from "@/assets/fatmalogo.svg";

export function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>(navLinks[0]?.href ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 50) {
          setActive(navLinks[0]?.href ?? "");
          return;
        }
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className="relative mx-auto flex max-w-[85rem] px-4 sm:px-6 lg:px-2 items-center justify-between gap-3 overflow-hidden rounded-2xl px-3 py-2.5 transition-all duration-500 sm:rounded-full sm:px-4 glass shadow-soft ring-1 ring-primary/15"
      >
        {/* scroll progress */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-[image:var(--gradient-neon)] transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />

        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="relative flex shrink-0 items-center">
            <img
              src={fatmaLogo}
              alt={`${profile.name} logo`}
              className="relative w-auto h-8 max-w-[140px] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1.5">
          <ul className="mr-1 hidden items-center gap-0.5 rounded-full border border-border/50 bg-background/30 p-1 backdrop-blur-md lg:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-[image:var(--gradient-neon)] shadow-neon" />
                    )}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <a
            href="#contact"
            className="group/cta relative hidden h-9 items-center overflow-hidden rounded-full bg-[image:var(--gradient-neon)] px-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-105 hover:shadow-neon sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover/cta:translate-x-full" />
            <span className="relative">Let's talk</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border/60 text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="glass shadow-soft grid gap-1 rounded-2xl p-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  active === l.href
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-[image:var(--gradient-neon)] px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Let's talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}