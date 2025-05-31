import { Link } from "react-router-dom";

export const Header = () => {
  const navbar_items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#project",
    },
    {
      title: "Skills",
      path: "#skill",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">
          Portfolio
        </a>

        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="nav-link text-slate-300 hover:text-white transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link text-slate-300 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link text-slate-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="nav-link text-slate-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="nav-link text-slate-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hidden md:hidden bg-slate-900 border-b border-slate-800"
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <a
            href="#home"
            className="py-2 text-slate-300 hover:text-white transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2 text-slate-300 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="py-2 text-slate-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="py-2 text-slate-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="py-2 text-slate-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
