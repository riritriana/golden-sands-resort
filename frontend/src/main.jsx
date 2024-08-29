import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import RoomSuites from "./pages/RoomSuites.jsx";
import { RouterProvider } from "react-router-dom";
import Galery from "./pages/Galery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/roomsuites",
        element: <RoomSuites />,
      },
      {
        path: "/galery",
        element: <Galery />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
