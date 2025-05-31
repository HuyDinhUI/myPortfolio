import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export const Header = () => {
  const navbar_items = [
    {
      title: "Trang Chủ",
      path: "#",
    },
    {
      title: "Thông Tin",
      path: "#about",
    },
    {
      title: "Dự Án",
      path: "#projects",
    },
    {
      title: "Kỹ Năng",
      path: "#skill",
    },
    {
      title: "Liên Hệ",
      path: "#contact",
    },
  ];

  const [mobile,setMobile] = useState(false)
  

  
  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 flex justify-center">
      <div className="container w-[90vw] px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">
          Portfolio
        </a>

        <div className="hidden md:flex space-x-8">
          {navbar_items.map(item=>{
            return <a className="nav-link text-slate-300 hover:text-white transition" href={item.path}>{item.title}</a>
          })}
        </div>

        <div className="md:hidden">
          <button onClick={()=>setMobile(!mobile)} id="menu-toggle" className="text-white focus:outline-none">
           <FontAwesomeIcon className="text-xl" icon={faBars} />
          </button>
        </div>
      </div>

      {mobile&&<div
        id="mobile-menu"
        className="bg-slate-900 border-b border-slate-800 absolute top-10 right-10"
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
      </div>}
    </nav>
  );
};
