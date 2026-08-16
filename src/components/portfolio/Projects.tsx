import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { projectImages } from "@/utils/shared";
import { projects, type Project } from "@/data/portfolioData";

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 text-card-foreground backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[image:var(--gradient-neon)] opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20" />

      <div className="relative overflow-hidden">
        <img
          src={projectImages[p.image]}
          alt={`${p.title} preview`}
          loading="lazy"
          width={1024}
          height={640}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

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
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-6">
          {p.code ? (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-4" /> Code
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

        <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}