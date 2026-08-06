import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="h-full flex items-center justify-center py-20 xl:py-0">
      <div className="container mx-auto flex flex-col items-center text-center gap-6">
        <span className="text-8xl xl:text-9xl font-extrabold text-transparent text-outline">
          404
        </span>
        <h1 className="h2">Page not found</h1>
        <p className="max-w-[500px] text-white/60">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link href="/">
          <Button variant="outline" size="lg" className="uppercase">
            Back home
          </Button>
        </Link>
      </div>
    </section>
  );
}
