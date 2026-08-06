import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header =() => {
    return(
        <header className="py-6 xl:py-8 text-white sticky top-0 z-30 bg-primary/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-3xl xl:text-4xl font-semibold">
                        Abdulmajeed<span className="text-accent">.</span>
                    </h1>

                </Link>
                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                      <Button>Hire Me</Button>
                    </Link>
                </div>


                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>



            </div>
        </header>
    );

};
  
export default Header;