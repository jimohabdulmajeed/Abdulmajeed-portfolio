"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

import portrait from "@/public/assets/abdulmajeed.jpg";
import { SocialIcon, TechIcon } from "../Icons";
import LocalTime from "../LocalTime";
import { heroWords, profile, socials } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const RotatingWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[1.12em] overflow-hidden" aria-hidden="true">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={heroWords[index]}
          className="accent-serif absolute inset-x-0 top-0 whitespace-nowrap pr-[0.15em]"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {heroWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const FloatingChip = ({ className, delay = 0, children }) => (
  <motion.div
    className={`absolute z-10 ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
    transition={{
      opacity: { duration: 0.6, delay: 0.9 + delay },
      scale: { duration: 0.6, delay: 0.9 + delay, ease },
      y: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    <div className="rounded-2xl border border-line bg-surface/80 px-4 py-3 shadow-lift backdrop-blur-xl">
      {children}
    </div>
  </motion.div>
);

const Portrait = () => (
  <motion.div
    className="relative mx-auto w-full max-w-[290px] sm:max-w-[340px] xl:max-w-[430px]"
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.1, delay: 0.15, ease }}
  >
    <div
      className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl dark:opacity-50"
      style={{ background: "radial-gradient(closest-side, rgb(var(--glow) / 0.45), transparent)" }}
      aria-hidden="true"
    />

    {/* 1.5px frame with a slow orbiting highlight */}
    <div className="relative overflow-hidden rounded-[2.25rem] bg-line p-[1.5px] shadow-lift">
      <div
        className="absolute inset-[-40%] animate-spin-slow motion-reduce:animate-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgb(var(--glow)) 50deg, transparent 110deg, transparent 360deg)",
        }}
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2.25rem-1.5px)] bg-surface-2">
        <Image
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1200px) 430px, (min-width: 640px) 340px, 290px"
          className="object-cover object-[50%_25%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
          <div>
            <p className="text-[15px] font-semibold leading-tight">{profile.name}</p>
            <p className="mt-1 text-[13px] text-white/70">
              {profile.role} · {profile.company}
            </p>
          </div>
          <span className="relative mb-1 flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
        </div>
      </div>
    </div>

    <FloatingChip className="-left-5 top-10 sm:-left-12" delay={0}>
      <div className="flex items-center gap-3">
        <span className="text-3xl font-semibold tracking-tight">5+</span>
        <span className="text-xs leading-tight text-muted">
          Years building
          <br />
          for the web
        </span>
      </div>
    </FloatingChip>

    <FloatingChip className="-right-4 top-1/2 sm:-right-10" delay={1.2}>
      <div className="flex items-center gap-3">
        <span className="text-3xl font-semibold tracking-tight">20+</span>
        <span className="text-xs leading-tight text-muted">
          Projects
          <br />
          delivered
        </span>
      </div>
    </FloatingChip>

    <FloatingChip className="-left-3 bottom-24 hidden sm:block xl:-left-16" delay={2.4}>
      <div className="flex items-center gap-2.5 text-lg text-muted">
        <TechIcon name="react" className="text-[#149eca] dark:text-[#61dafb]" />
        <TechIcon name="next" className="text-foreground" />
        <TechIcon name="tailwind" className="text-[#0ea5e9]" />
        <TechIcon name="wordpress" className="text-[#21759b] dark:text-[#5aa9d6]" />
        <span className="ml-1 font-mono text-[11px] uppercase tracking-widest">Stack</span>
      </div>
    </FloatingChip>
  </motion.div>
);

const Hero = () => {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      {/* backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid mask-fade-y absolute inset-0" />
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl dark:opacity-25"
          style={{ background: "radial-gradient(closest-side, rgb(var(--glow) / 0.6), transparent)" }}
        />
      </div>

      <div className="container">
        <div className="grid items-center gap-14 xl:grid-cols-12 xl:gap-10">
          <div className="order-2 text-center xl:order-1 xl:col-span-7 xl:text-left">
            <motion.div {...enter(0.1)} className="mb-7 flex justify-center xl:justify-start">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2 pr-4 text-sm text-muted shadow-card backdrop-blur">
                <span className="relative flex h-6 items-center rounded-full bg-accent/15 px-2 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
                  Open
                </span>
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              {...enter(0.2)}
              className="text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl xl:text-[4.6rem]"
            >
              <span className="sr-only">{profile.name}, software engineer. </span>
              Crafting web experiences that are
              <RotatingWord />
              <span className="sr-only">fast, accessible, beautiful and built to last.</span>
            </motion.h1>

            <motion.p
              {...enter(0.35)}
              className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg xl:mx-0"
            >
              I&apos;m <span className="font-medium text-foreground">{profile.name}</span>, a software engineer in
              Abuja with 5+ years of experience turning ideas into responsive, accessible products — from
              pixel-perfect React & Next.js interfaces to the Node.js APIs behind them.
            </motion.p>

            <motion.div
              {...enter(0.5)}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:justify-start"
            >
              <a
                href="#work"
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 font-semibold text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={profile.cv}
                download
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-7 font-semibold backdrop-blur transition-colors hover:border-accent/50 hover:text-accent sm:w-auto"
              >
                Download CV
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              {...enter(0.65)}
              className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center xl:justify-start"
            >
              <ul className="flex items-center gap-2" aria-label="Social profiles">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    >
                      <SocialIcon name={s.id} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
              <span className="hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-widest text-subtle">
                {profile.location} · <LocalTime />
              </p>
            </motion.div>
          </div>

          <div className="order-1 xl:order-2 xl:col-span-5">
            <Portrait />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle transition-colors hover:text-accent xl:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
