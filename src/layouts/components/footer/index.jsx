import { Link } from "react-router-dom";

export const Footer = () => {
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
    <div className="p-4 flex justify-between items-center">
      <p className="text-gray-400 text-xs">&copy; 2025 Huy Dinh. All rights reserved.</p>
      <div>
        <ul className="flex gap-5 text-gray-400 text-xs">
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
  )
};
