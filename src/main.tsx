import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.tsx";
import InfoPage from "./pages/InfoPage.tsx";
import RootLayout from "./layouts/rootlayout/RootLayout.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import ProjectPage from "./pages/projectpage/ProjectPage.tsx";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projecten",
        element: <ProjectPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
