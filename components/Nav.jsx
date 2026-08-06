"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return(
    <nav className="flex gap-2">
      {links.map((link, index ) => {
        const isActive = link.path === pathname;
        return (
          <Link href={link.path}
           key={index}
           className={`${
            isActive ? "text-accent bg-white/5" : "text-white/80 hover:text-accent"
          } capitalize font-medium px-4 py-2 rounded-full transition-all`}
          >
            {link.name}
            </Link>
        );

      })}
    </nav>
  );

};

export default Nav;