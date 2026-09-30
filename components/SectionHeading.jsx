import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

// `title` may contain one *emphasised* word, rendered in the serif accent.
const renderTitle = (title) =>
  title.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith("*") ? (
      <em key={i} className="accent-serif">
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    )
  );

const SectionHeading = ({ id, eyebrow, title, description, align = "left", className }) => {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className="text-balance max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]"
      >
        {renderTitle(title)}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-base leading-relaxed text-muted md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
