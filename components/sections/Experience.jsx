import { Award, Briefcase, GraduationCap } from "lucide-react";

import SectionHeading from "../SectionHeading";
import SpotlightCard from "../SpotlightCard";
import Reveal from "../Reveal";
import { certifications, courses, education, experience } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-surface-2/40" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've *worked* and learned."
          description="Five years of shipping real projects, grounded in a Computer Science degree and a habit of continuous learning."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* timeline */}
          <div className="lg:col-span-7">
            <h3 className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-subtle">
              <Briefcase className="h-4 w-4" aria-hidden="true" /> Work history
            </h3>
            <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-px before:bg-line">
              {experience.map((job, i) => (
                <Reveal as="li" key={`${job.role}-${job.period}`} delay={i * 0.08} className="relative pl-10">
                  <span
                    className={`absolute left-0 top-8 grid h-[23px] w-[23px] place-items-center rounded-full border bg-background ${
                      job.current ? "border-accent" : "border-line"
                    }`}
                    aria-hidden="true"
                  >
                    <span className={`h-2 w-2 rounded-full ${job.current ? "bg-accent" : "bg-subtle"}`} />
                    {job.current && (
                      <span className="absolute inset-0 animate-ping rounded-full border border-accent opacity-40 motion-reduce:animate-none" />
                    )}
                  </span>
                  <SpotlightCard className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-subtle">{job.period}</span>
                      {job.current && (
                        <span className="chip border-accent/30 py-0.5 text-[11px] text-accent">Current</span>
                      )}
                    </div>
                    <h4 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{job.role}</h4>
                    <p className="mt-1 text-muted">
                      {job.company} <span className="text-subtle">· {job.location}</span>
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* education & certifications */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <h3 className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-subtle">
                <GraduationCap className="h-4 w-4" aria-hidden="true" /> Education
              </h3>
              <Reveal>
                <SpotlightCard className="p-6 md:p-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-subtle">{education.period}</span>
                  <h4 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{education.degree}</h4>
                  <p className="mt-1 text-muted">{education.school}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="chip border-accent/30 text-accent">{education.honours}</span>
                  </div>
                  <p className="mt-5 border-t border-line pt-5 text-sm text-muted">{education.extra}</p>
                </SpotlightCard>
              </Reveal>
            </div>

            <div>
              <h3 className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-subtle">
                <Award className="h-4 w-4" aria-hidden="true" /> Certifications
              </h3>
              <Reveal>
                <ul className="card divide-y divide-line overflow-hidden">
                  {certifications.map((cert) => (
                    <li
                      key={cert.title}
                      className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2/70 md:px-6"
                    >
                      <div className="min-w-0">
                        <p className="font-medium leading-snug">{cert.title}</p>
                        {cert.issuer && <p className="mt-0.5 text-sm text-subtle">{cert.issuer}</p>}
                      </div>
                      <span className="shrink-0 font-mono text-xs text-subtle">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <p className="mt-5 text-sm leading-relaxed text-subtle">{courses}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
