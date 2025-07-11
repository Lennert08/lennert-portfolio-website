import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootlayout/RootLayout.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import ProjectPage from "./pages/projectpage/ProjectPage.tsx";
import SkillsPage from "./pages/skillspage/SkillsPage.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import CoachAppDetailPage from "./pages/coachappdetailpage/CoachAppDetailPage.tsx";
import BitNovaDetailPage from "./pages/bitnovadetailpage/BitNovaDetailPage.tsx";

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
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/projecten/coachapp",
        element: <CoachAppDetailPage />,
      },
      {
        path: "/projecten/bitnova",
        element: <BitNovaDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
