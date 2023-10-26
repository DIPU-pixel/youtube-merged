import { Home } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  if (!isMenuOpen) {
    return (
      <aside className="p-5  space-y-4 hidden md:block top-[60px] sticky h-[calc(100vh-60px)]">
        {asideData.map((elm, i) => (
          <div
            className="w-max flex flex-col items-center cursor-pointer space-y-1 text-gray-500/80 "
            key={i}
          >
            {elm.icon}
            <h2 className="text-xs text-black"> {elm.name} </h2>
          </div>
        ))}
      </aside>
    );
  }
  return (
    <div
      className={`p-5 shadow-lg  hidden  md:block
        min-w-[20%]
       sticky top-[65px] overflow-y-auto h-[calc(100vh-65px)] ease-in-out `}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold p-1">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold p-1">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

const asideData = [
  {
    name: "Home",
    icon: <Home />,
    pathname: "/",
  },
  {
    name: "Home",
    icon: <Home />,
    pathname: "/",
  },
  {
    name: "Home",
    icon: <Home />,
    pathname: "/",
  },
  {
    name: "Home",
    icon: <Home />,
    pathname: "/",
  },
  {
    name: "Home",
    icon: <Home />,
    pathname: "/",
  },
  {
    name: "Home",
    icon: <Home />,
    pathname: "/",
  },
];
