import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import InfoPage from "./pages/InfoPage.tsx";
import RootLayout from "./layouts/rootlayout/RootLayout.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

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
        path: "/info",
        element: <InfoPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
