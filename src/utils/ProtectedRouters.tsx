import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = useSelector((state: any) => state.authToken?.token);

  return token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
