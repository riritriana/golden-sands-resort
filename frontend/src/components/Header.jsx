import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className=" w-full flex items-center justify-between bg-slate-100 shadow-lg px-4 py-4">
      <div className="flex w-1/2 items-center gap-4 ">
        <img src="vite.svg" alt="" />
        <h1 className="text-3xl font-bold text-blue-300 text-shadow-md">
          Golden Sands Resort
        </h1>
      </div>
      <nav className="flex w-1/2">
        <ul className="w-full flex justify-evenly gap-2">
          <li className="flex items-center gap-2 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Link to="/roomsuites">Room&Suites</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Link to="/roomsuites">Galery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
