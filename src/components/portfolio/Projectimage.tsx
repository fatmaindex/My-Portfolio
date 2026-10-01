import { projectImages } from "@/utils/shared";

type Props = {
  /** key inside projectImages (project.image) */
  image: string;
  title: string;
  /** size / transition classes, e.g. "h-48 w-full" */
  className?: string;
};


export function ProjectImage({ image, title, className = "" }: Props) {
  const src = projectImages[image];

  if (!src) {
    return (
      <div
        role="img"
        aria-label={`${title} preview`}
        className={`relative flex items-center justify-center overflow-hidden bg-surface-2 ${className}`}
      >
        <div className="absolute inset-0 bg-[image:var(--gradient-neon)] opacity-15" />
        <span className="relative px-4 text-center text-lg font-semibold text-foreground/80">
          {title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} preview`}
      loading="lazy"
      width={1024}
      height={640}
      className={`object-cover object-top ${className}`}
    />
  );
}