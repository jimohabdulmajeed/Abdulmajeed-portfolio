import { GraduationCap, Heart, Languages, MapPin } from "lucide-react";

import SectionHeading from "../SectionHeading";
import SpotlightCard from "../SpotlightCard";
import Reveal from "../Reveal";
import Counter from "../Counter";
import LocalTime from "../LocalTime";
import { TechIcon } from "../Icons";
import { education, profile, stats, toolbox } from "@/lib/data";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="About me"
          title="A developer who sweats the *details*."
          description="Clean interfaces, fast load times and code the next developer can pick up with ease — that's the standard I hold every project to."
        />

        <div className="grid gap-4 md:grid-cols-6 lg:gap-5">
          {/* bio */}
          <Reveal className="md:col-span-6 lg:col-span-4 lg:row-span-2">
            <SpotlightCard className="flex h-full flex-col justify-between gap-10 p-7 md:p-10">
              <div className="space-y-5 text-lg leading-relaxed text-muted md:text-xl">
                <p>
                  I&apos;m a <span className="text-foreground">Computer Science graduate</span> from the University
                  of Abuja and a software engineer at{" "}
                  <span className="text-foreground">{profile.company}</span>, where I work alongside IT managers,
                  cybersecurity specialists and senior engineers to ship production websites and internal tools. I
                  also work remotely as a contract developer for{" "}
                  <span className="text-foreground">Aisjeed Technologies</span>.
                </p>
                <p>
                  My toolkit centres on JavaScript, React and Next.js — backed by Node.js, MongoDB and WordPress when a
                  project calls for it. I&apos;ve delivered 20+ projects, from marketing sites to full-stack
                  dashboards, and I&apos;m always learning something new.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="chip">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {profile.location}
                </span>
                <span className="chip">
                  <Languages className="h-3.5 w-3.5" aria-hidden="true" /> English · Pidgin
                </span>
                <span className="chip">
                  <Heart className="h-3.5 w-3.5" aria-hidden="true" /> Coding & football
                </span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* stats */}
          <Reveal delay={0.08} className="md:col-span-6 lg:col-span-2">
            <SpotlightCard className="grid h-full grid-cols-2 p-2">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col justify-end gap-1 p-5 ${i < 2 ? "border-b border-line" : ""} ${
                    i % 2 === 0 ? "border-r border-line" : ""
                  }`}
                >
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="text-4xl font-semibold tracking-tight md:text-5xl"
                  />
                  <span className="text-sm leading-snug text-muted">{s.label}</span>
                </div>
              ))}
            </SpotlightCard>
          </Reveal>

          {/* education */}
          <Reveal delay={0.04} className="md:col-span-3 lg:col-span-2">
            <SpotlightCard className="flex h-full flex-col gap-6 p-7">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="mt-auto">
                <p className="font-mono text-xs uppercase tracking-widest text-subtle">{education.period}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{education.degree}</h3>
                <p className="mt-1 text-muted">{education.school}</p>
                <p className="mt-3 text-sm text-accent">{education.honours}</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* now */}
          <Reveal delay={0.04} className="md:col-span-3 lg:col-span-2">
            <SpotlightCard className="relative flex h-full flex-col justify-between gap-8 p-7">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-60 blur-2xl"
                style={{ background: "radial-gradient(closest-side, rgb(var(--glow) / 0.35), transparent)" }}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span className="chip border-accent/30 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Now
                </span>
                <span className="font-mono text-xs text-subtle">
                  <LocalTime />
                </span>
              </div>
              <div>
                <p className="text-xl font-semibold leading-snug tracking-tight">
                  Engineering software at {profile.company} — and open to freelance work.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Start a project →
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* toolbox */}
          <Reveal delay={0.08} className="md:col-span-6 lg:col-span-4">
            <SpotlightCard className="h-full p-7 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-subtle">Toolbox</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {toolbox.map((group) => (
                  <div key={group.group}>
                    <p className="mb-3 text-sm font-medium">{group.group}</p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2/60 px-3 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                        >
                          <TechIcon name={item.icon} className="h-4 w-4" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
