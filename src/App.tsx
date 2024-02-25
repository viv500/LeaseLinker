import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";
import ListingsPage from "./pages/ListingsPage/ListingsPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  { path: "/getstarted", element: <GetStartedPage /> },
  { path: "/listings", element: <ListingsPage /> },
  { path: "/selection", element: <SelectionPage /> },
]);
function App() {
  return (
    <div className="min-h-lvh">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
