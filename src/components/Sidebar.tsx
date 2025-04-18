import { sideBarMenu } from "@/app/data";

const Sidebar = () => {
  return (
    <ul className="flex flex-col gap-6 bg-slate-600/20 backdrop-blur-md  text-white fixed top-1/2 left-3 -translate-y-1/2 z-10 p-3 rounded-md">
      {sideBarMenu.map((menu, index) => (
        <li
          key={index}
          className="px-3 py-1.5 rounded hover:bg-white/20 transition-all"
        >
          <a href="" className="flex flex-col items-center">
            {menu.icon}
            <span className="mt-2">{menu.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
