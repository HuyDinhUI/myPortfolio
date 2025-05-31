import { Link } from "react-router-dom";

export const Footer = () => {
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

  return (
    <div className="p-4 flex justify-between items-center">
      <p className="text-gray-400 text-xs">&copy; 2025 Huy Dinh. All rights reserved.</p>
      <div>
        <ul className="flex gap-5 text-gray-400 text-xs">
          {navbar_items.map((item) => {
            return (
              <li>
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
};
