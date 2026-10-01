import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/portfolioData";
import { ProjectImage } from "@/components/portfolio/ProjectImage";
import { ProjectModal } from "@/components/portfolio/ProjectModal";

// Projects visible before "Show more". With 7 projects everything is shown,
// so the button hides itself. Lower it to 6 once you add more projects.
const INITIAL_COUNT = 7;

/**
 * All cards are the same size. Desktop layout (6-column grid, each card = 2 columns):
 * 3 cards per row. 7 projects -> 3 / 3 / 1, and the last card stays on the left.
 * Tablet (2 columns): cards fill 2 per row, an odd last card stays on the left.
 */
function spanClass() {
  return "lg:col-span-2";
}

function ProjectCard({
  project: p,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  // Only offer the modal when there is more to show than the card already has
  const hasDetails = Boolean(p.highlights?.length);
  const image = (
    <ProjectImage
      image={p.image}
      title={p.title}
      className="h-48 w-full transition-transform duration-700 group-hover:scale-105"
    />
  );

  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 text-card-foreground backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[image:var(--gradient-neon)] opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20" />

      {hasDetails ? (
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          aria-label={`View details: ${p.title}`}
          className="relative block w-full cursor-pointer overflow-hidden text-left"
        >
          {image}
        </button>
      ) : (
        <div className="relative block w-full overflow-hidden">{image}</div>
      )}

      <div className="flex flex-1 flex-col p-7 pt-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <p className="min-w-0 truncate font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {p.kind}
          </p>
          {p.featured ? (
            <span className="inline-flex shrink-0 items-center rounded-full bg-[image:var(--gradient-neon)] px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
              Featured
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
        <p className="mt-3 line-clamp-4 text-pretty text-sm leading-relaxed text-muted-foreground">
          {p.blurb}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
          {hasDetails ? (
            <button
              type="button"
              onClick={onOpen}
              aria-haspopup="dialog"
              className="group/btn inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View details
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          ) : null}
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
          {p.demo ? (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary transition-transform duration-300 hover:translate-x-0.5"
            >
              {p.demoLabel ?? "Live demo"} <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  const toggleShowAll = () => {
    if (showAll) {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll((v) => !v);
  };

  return (
    <section id="projects" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="My work"
            title=""
            accent="Projects"
            description="Frontend and full-stack projects — from interface design to backend integration, built end to end."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-6">
          {visible.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i < INITIAL_COUNT ? i : i - INITIAL_COUNT) * 70}
              className={`h-full ${spanClass()}`}
            >
              <ProjectCard project={p} onOpen={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>

        {hiddenCount > 0 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={toggleShowAll}
              aria-expanded={showAll}
              className="cursor-pointer rounded-full border border-border bg-surface/60 px-6 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {showAll ? "Show less" : `Show more (${hiddenCount})`}
            </button>
          </div>
        ) : null}
      </div>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}