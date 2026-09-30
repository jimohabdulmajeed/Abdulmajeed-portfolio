"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Lock } from "lucide-react";

import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { projectFilters, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 6;

const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

// Stand-in for private builds that have no public screenshots.
const PrivatePanel = ({ title, monogram, highlights, tint }) => (
  <div className="absolute inset-0 flex items-center justify-center p-6 pt-14">
    <div className="w-[82%] max-w-md overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-lift backdrop-blur transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-[11px] text-subtle">{title}</span>
        <Lock className="ml-auto h-3 w-3 shrink-0 text-subtle" />
      </div>
      <div className="flex flex-col items-center gap-3 px-5 py-5 sm:gap-5 sm:py-7">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl text-base font-semibold tracking-tight sm:h-16 sm:w-16 sm:text-xl"
          style={{ color: `rgb(${tint})`, background: `rgb(${tint} / 0.12)` }}
        >
          {monogram}
        </span>
        <ul className="hidden flex-wrap justify-center gap-2 sm:flex" aria-label="Highlights">
          {highlights.map((h) => (
            <li key={h} className="chip">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, index }) => {
  const { title, category, description, stack, image, live, note, tint, monogram, highlights } = project;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-[box-shadow,border-color] duration-500 hover:border-accent/30 hover:shadow-lift has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent"
    >
      {/* stage */}
      <div className="relative aspect-[16/11] overflow-hidden border-b border-line bg-surface-2">
        <div
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100 dark:opacity-80"
          style={{ background: `radial-gradient(90% 75% at 50% 100%, rgb(${tint} / 0.32), transparent 72%)` }}
          aria-hidden="true"
        />
        <div
          className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
          aria-hidden="true"
        />
        {image ? (
          <Image
            src={image}
            alt={`${title} shown on a laptop`}
            placeholder="blur"
            sizes="(min-width: 1200px) 520px, (min-width: 768px) 46vw, 90vw"
            className="absolute left-1/2 top-[55%] h-auto w-[88%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out-expo group-hover:-translate-y-[53%] group-hover:scale-[1.035]"
          />
        ) : (
          <PrivatePanel title={title} monogram={monogram} highlights={highlights} tint={tint} />
        )}
        <span className="chip absolute left-4 top-4 bg-surface/80 backdrop-blur md:left-5 md:top-5">{category}</span>
        <span className="absolute right-5 top-5 font-mono text-xs text-subtle">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none after:absolute after:inset-0 after:z-10 focus-visible:ring-0"
              >
                {title}
                <span className="sr-only"> (opens live site in a new tab)</span>
              </a>
            ) : (
              title
            )}
          </h3>
          {live && (
            <span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-background"
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>
        <ul className="mb-6 mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
          {stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-5 text-sm">
          {live ? (
            <>
              <span className="shrink-0 font-medium text-accent">Visit live site</span>
              <span className="ml-4 min-w-0 truncate font-mono text-xs text-subtle">{hostname(live)}</span>
            </>
          ) : (
            <span className="flex items-center gap-2 text-subtle">
              <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {note ? `${note} · ` : ""}Demo available on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Work = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - visible.length;

  const collapse = () => {
    setExpanded(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Projects I've *shipped*."
            description={`${projects.length} websites, platforms and internal tools — built for companies, schools, non-profits and startups across Nigeria.`}
            className="mb-0 md:mb-0"
          />
          <Reveal>
            <div
              role="group"
              aria-label="Filter projects"
              className="flex w-full gap-1 rounded-full border border-line bg-surface p-1 shadow-card sm:inline-flex sm:w-auto"
            >
              {projectFilters.map((f) => {
                const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={isActive}
                    className={cn(
                      "relative flex-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors sm:flex-none sm:px-4",
                      isActive ? "text-background" : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="work-filter"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative">
                      {f}
                      <sup className="ml-1 font-mono text-[10px] opacity-60">{count}</sup>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 md:mt-16">
          <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((project) => (
                <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />
              ))}
            </AnimatePresence>
          </motion.div>
        </Reveal>

        {(hiddenCount > 0 || expanded) && filtered.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => (expanded ? collapse() : setExpanded(true))}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 font-semibold shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/50"
            >
              {expanded ? "Show fewer projects" : `Show all ${filtered.length} projects`}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
