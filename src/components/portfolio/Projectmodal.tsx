import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { ProjectImage } from "@/components/portfolio/ProjectImage";
import type { Project } from "@/data/portfolioData";

type Props = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project: p, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface text-card-foreground shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-background/70 p-2 backdrop-blur transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <X className="size-4" />
        </button>

        <ProjectImage
          image={p.image}
          title={p.title}
          className="h-56 w-full sm:h-72"
        />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              {p.kind}
            </p>
            {p.featured ? (
              <span className="inline-flex items-center rounded-full bg-[image:var(--gradient-neon)] px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
                Featured
              </span>
            ) : null}
          </div>

          <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
            {p.blurb}
          </p>

          {p.highlights?.length ? (
            <>
              <h4 className="mt-6 text-sm font-semibold">What I built</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </>
          ) : null}

          <h4 className="mt-6 text-sm font-semibold">Tech stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {p.code || p.demo || p.moreLinks?.length ? (
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
              {p.code ? (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-4" /> {p.codeLabel ?? "Code"}
                </a>
              ) : null}
              {p.moreLinks?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-4" /> {l.label}
                </a>
              ))}
              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary transition-transform duration-300 hover:translate-x-0.5"
                >
                  {p.demoLabel ?? "Live demo"}{" "}
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}