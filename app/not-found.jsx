import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden py-32">
      <div className="bg-grid mask-fade-y absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container flex flex-col items-center gap-6 text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          This page <em className="accent-serif">wandered off.</em>
        </h1>
        <p className="max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          Back home
        </Link>
      </div>
    </section>
  );
}
