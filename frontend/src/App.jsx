import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import DatasetPage from "./pages/DatasetPage";
import AnalyzePage from "./pages/AnalyzePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route index element={<DashboardPage />} />
        <Route path="/datasets" element={<DatasetPage />} />
        <Route path="/analyze" element={<AnalyzePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
