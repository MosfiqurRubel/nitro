import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import { navItems } from "@/lib/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header id="navbar" className="navbar">
        <div className="navbar-container">
          <Link
            to="hero"
            smooth
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <h1 id="logo">NITRO</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-28 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                spy
                smooth
                duration={700}
                offset={-100}
                activeClass="!text-[#D9F300]"
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button
            variant="primary"
            size="medium"
            weight="font-medium"
            label="Buy now"
            className="max-lg:hidden capitalize lg:flex"
          />

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mobile-menu-container">
          {navItems.map((item) => (
            <Link
              key={item.section}
              to={item.section}
              spy
              smooth
              duration={700}
              offset={-100}
              onClick={closeMenu}
              activeClass="text-[#D9F300]"
              className="mobile-nav-link"
            >
              {item.label}
            </Link>
          ))}

          <Button
            variant="primary"
            size="medium"
            weight="font-medium"
            label="Buy now"
            className="mt-4 capitalize"
          />
        </div>
      </div>
    </>
  );
}
