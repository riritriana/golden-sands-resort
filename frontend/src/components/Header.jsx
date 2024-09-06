import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  function handleLogout() {
    Cookies.remove("token");
    navigate("/login");
  }
  return (
    <header className="w-full flex items-center justify-between bg-slate-100 shadow-lg px-6 py-6 font-serif">
      <div className="flex w-1/2 items-center gap-4">
        <h1 className="text-3xl font-bold text-blue-400 text-shadow-md">
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
          {!token && (
            <li className="flex items-center gap-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-600"
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li className="flex items-center gap-2">
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
