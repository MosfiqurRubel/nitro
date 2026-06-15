// import { useState } from "react";

// import Heading from "@/components/ui/Heading";
// import Button from "@/components/ui/Button";

// const Navbar = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <header>
//       <Heading as="h1" children="Get started" />
//       <Button
//         label={`Count is ${count}`}
//         variant="primary"
//         onClick={() => setCount((count) => count + 1)}
//       />
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#shop" },
  { name: "About", href: "#about" },
  { name: "Galleru", href: "#galleru" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-8 left-0 z-50 w-full">
      <div className="mx-auto flex h-11 items-center justify-between px-6 lg:px-22">
        <a
          href="#"
          className="navbar-item text-2xl font-black tracking-tighter text-[#E0E600]"
        >
          NITRO
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 2xl:gap-49 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="navbar-item text-base font-semibold capitalize tracking-normal text-white transition duration-300 hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}

        <Button label="Buy Now" variant="primary" className="max-md:hidden" />

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <button className="rounded-full bg-yellow-400 py-3 font-bold text-black">
              Buy Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
