import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Forside", to: "/" },
    { name: "Plakater", to: "/plakater" },
    { name: "Om", to: "/om" },
    { name: "Kontakt", to: "/kontakt" },
    { name: "Login", to: "/login" }
  ];

  return (
    <nav className="py-4 sm:px-4 lg:px-4">
      <div className="flex justify-between items-center md:block">

        {/* BURGER-MENU FOR MOBIL */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark" size={24} />
            ) : (
              <i className="fa-solid fa-bars" size={24} />
            )}
          </button>
        </div>


        {/* DESKTOP */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block px-4 py-2 uppercase ${
                    isActive ? "border-b-2 border-gray-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBIL */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 uppercase ${
                    isActive ? "border-l-4 border-gray-500 bg-gray-100" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
