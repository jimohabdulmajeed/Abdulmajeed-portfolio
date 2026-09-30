import { TechIcon } from "../Icons";
import { toolbox } from "@/lib/data";

const items = toolbox.flatMap((g) => g.items);

const Row = ({ hidden }) => (
  <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
    {items.map((item) => (
      <li key={item.name} className="flex items-center gap-3 whitespace-nowrap text-lg font-medium text-subtle">
        <TechIcon name={item.icon} className="h-6 w-6" />
        {item.name}
      </li>
    ))}
  </ul>
);

const TechMarquee = () => {
  return (
    <section aria-label="Technologies I work with" className="border-y border-line bg-surface/50 py-7">
      <div className="mask-fade-x group flex overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
