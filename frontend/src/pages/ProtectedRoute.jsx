import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import checkToken from "../services/token/checkToken";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      setIsAuthenticated(await checkToken());
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading . . .</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
