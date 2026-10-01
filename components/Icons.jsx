import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiFigma,
  SiFramer,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { CodeXml, Database, Palette, PenTool, SquareKanban } from "lucide-react";

const tech = {
  react: SiReact,
  next: SiNextdotjs,
  js: SiJavascript,
  ts: SiTypescript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss3,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  sql: Database,
  wordpress: SiWordpress,
  figma: SiFigma,
  framer: SiFramer,
};

const social = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  youtube: FaYoutube,
};

const service = {
  code: CodeXml,
  pen: PenTool,
  palette: Palette,
  kanban: SquareKanban,
};

const pick = (map) => {
  const Icon = ({ name, ...props }) => {
    const Comp = map[name];
    return Comp ? <Comp aria-hidden="true" {...props} /> : null;
  };
  return Icon;
};

export const TechIcon = pick(tech);
export const SocialIcon = pick(social);
export const ServiceIcon = pick(service);
