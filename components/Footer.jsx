import { ArrowUp } from "lucide-react";

import { SocialIcon } from "./Icons";
import { navLinks, profile, socials } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-16">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">
              {profile.shortName}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.role} crafting fast, accessible web experiences from {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.cv} download className="text-muted transition-colors hover:text-foreground">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <SocialIcon name={s.id} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-line py-6 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-foreground">
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      <p
        className="pointer-events-none select-none bg-gradient-to-b from-foreground/[0.07] to-transparent bg-clip-text -mb-[1.5vw] whitespace-nowrap text-center text-[15vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent"
        aria-hidden="true"
      >
        {profile.shortName}
      </p>
    </footer>
  );
};

export default Footer;
