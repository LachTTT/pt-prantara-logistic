import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="Prantara Logistic"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-1 text-gray-700 font-medium transition-colors duration-300 hover:text-orange-500 group"
              >
                {item.name}

                <span
                  className="
                    absolute left-0 bottom-0
                    h-[2px] w-full
                    bg-orange-500
                    scale-x-0
                    origin-right
                    transition-transform duration-300
                    group-hover:scale-x-100
                    group-hover:origin-left
                  "
                />
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pt-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium hover:text-orange-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
