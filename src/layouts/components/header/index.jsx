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
    <nav className="fixed w-full z-50 bg-slate-900/10 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-blue-500 font-bold text-2xl">Portfolio</h1>
        <div>
          <ul className="flex gap-5 text-white text-xs">
            {navbar_items.map((item) => {
              return (
                <li>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
