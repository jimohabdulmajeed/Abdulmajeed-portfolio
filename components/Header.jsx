"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { SocialIcon } from "./Icons";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { navLinks, profile, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

const sectionIds = ["top", ...navLinks.map((l) => l.id)];

const useActiveSection = (ids) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const scrollToSection = (id) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  history.replaceState(null, "", `#${id}`);
};

const Logo = () => (
  <Link href="/#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-foreground font-serif text-xl italic text-background transition-transform duration-300 group-hover:-rotate-6">
      A
      <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
    <span className="hidden text-[15px] font-semibold tracking-tight sm:block">
      {profile.shortName}
      <span className="text-accent">.</span>
    </span>
  </Link>
);

const Header = () => {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet first so its scroll lock is released before we scroll.
  const navigate = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 320);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div className="container pt-3 md:pt-4">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full border px-2.5 pl-3 transition-all duration-500 md:h-16 md:px-3 md:pl-4",
            scrolled
              ? "border-line bg-background/70 shadow-card backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-transparent"
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id} className="relative">
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-foreground" : "text-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-line bg-surface-2"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            {/* Fixed id: Radix's generated useId differs between server and client
                render here, which caused a hydration mismatch on aria-controls. */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 lg:hidden"
                aria-label="Open menu"
                aria-controls="mobile-menu"
              >
                <Menu className="h-[18px] w-[18px]" />
              </SheetTrigger>
              <SheetContent id="mobile-menu" className="flex flex-col">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <span className="eyebrow mt-2">Menu</span>
                <nav aria-label="Mobile" className="mt-8 flex-1">
                  <ul className="flex flex-col">
                    {navLinks.map((link, i) => (
                      <li key={link.id} className="border-b border-line">
                        <a
                          href={`#${link.id}`}
                          onClick={(e) => navigate(e, link.id)}
                          className={cn(
                            "flex items-baseline justify-between py-4 text-3xl font-semibold tracking-tight transition-colors",
                            active === link.id ? "text-accent" : "text-foreground hover:text-accent"
                          )}
                        >
                          {link.label}
                          <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex flex-col gap-5">
                  <a
                    href="#contact"
                    onClick={(e) => navigate(e, "contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background"
                  >
                    Let&apos;s talk <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <div className="flex items-center justify-center gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:text-accent"
                      >
                        <SocialIcon name={s.id} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
