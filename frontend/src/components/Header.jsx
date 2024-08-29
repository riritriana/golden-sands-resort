import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-slate-100 shadow-lg px-4 py-4 font-serif">
      <div className="flex w-1/2 items-center gap-4">
        {/* <img src="vite.svg" alt="" /> */}
        <h1 className="text-3xl font-bold text-blue-300 text-shadow-md">
          Golden Sands Resort
        </h1>
      </div>
      <nav className="flex w-1/2">
        <ul className="w-full flex justify-evenly gap-2">
          <li className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }
            >
              About
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <NavLink
              to="/roomsuites"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }
            >
              Rooms & Suites
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <NavLink
              to="/galery"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
