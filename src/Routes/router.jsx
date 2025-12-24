import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FlashbackFlow from "../Pages/FlashbackAI/FlashbackOnboarding";
import FlashbackOnboarding from "../Pages/FlashbackAI/FlashbackOnboarding";
import { Step5_Login } from "../Pages/FlashbackAI/Step5_Login";
import { Step_PreviewReady } from "../Pages/FlashbackAI/Step_PreviewReady";
import PricingPage from "../Pages/Pricing/PricingPage";
import LoginPage from "../Pages/Authentication/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { GetCoinsPage } from "../Pages/Dashboard/GetCoinsPage";
import { DashboardLayout } from "../Pages/Dashboard/DashboardLayout";
import { DashboardHome } from "../Pages/Dashboard/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flashback",
    element: <FlashbackOnboarding />,
  },
  {
    path: "/step-login",
    element: <Step5_Login />,
  },
  {
    path: "/step-preview",
    element: <Step_PreviewReady />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "get-coins",
        element: <GetCoinsPage />,
      },
    ],
  },
]);
