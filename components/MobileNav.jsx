"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";


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
const MobileNav = () => {
    const pathname = usePathname();
  return (
  <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className =" text-[32px] text-accent "/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Navigation menu</SheetTitle>
        </VisuallyHidden>
        {/*logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
                Abdulmajeed<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/*nav*/}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index ) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                  key={index}
                  className={`${
                    isActive ? "text-accent bg-white/5" : "text-white/80 hover:text-accent"
                  } text-xl capitalize px-6 py-2 rounded-full transition-all`}
                >
                {link.name}
              </Link>
            );
          })}

        </nav>
    </SheetContent>
  </Sheet>
);
  
};

export default MobileNav;