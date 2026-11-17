import { Check } from "lucide-react";

import SectionHeading from "../SectionHeading";
import SpotlightCard from "../SpotlightCard";
import Reveal from "../Reveal";
import { ServiceIcon } from "../Icons";
import { process, services } from "@/lib/data";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-surface-2/40" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="How I can *help* you."
          description="From the first wireframe to launch day, I can own the whole journey or slot into your team where you need an extra pair of hands."
        />

        {/* bento: two wide cards on top, three below on desktop; an odd last card spans the row on tablets */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {services.map((service, i) => {
            const wide = i < 2;
            const oddLast = services.length % 2 === 1 && i === services.length - 1;
            return (
              <Reveal
                key={service.title}
                delay={(wide ? i : i - 2) * 0.08}
                className={cn(wide ? "lg:col-span-3" : "lg:col-span-2", oddLast && "md:col-span-2 lg:col-span-2")}
              >
                <SpotlightCard as="article" className={cn("flex h-full flex-col p-7 md:p-9", !wide && "lg:p-8")}>
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface-2 text-foreground transition-colors duration-300 group-hover/spot:border-accent/40 group-hover/spot:text-accent">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-sm text-subtle">0{i + 1}</span>
                  </div>
                  <h3 className={cn("mt-8 text-2xl font-semibold tracking-tight md:text-3xl", !wide && "lg:text-2xl")}>
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
                  {/* mt-auto pins the checklist to the card's foot so dividers line up across a row */}
                  <div className="mt-auto pt-7">
                    <ul className="grid gap-2.5 border-t border-line pt-6">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                            <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* process */}
        <Reveal className="mt-20">
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-subtle">My process</h3>
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="group relative bg-surface p-7 transition-colors hover:bg-surface-2">
                <span className="font-serif text-5xl italic text-accent">{p.step}</span>
                <p className="mt-6 text-lg font-semibold tracking-tight">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
