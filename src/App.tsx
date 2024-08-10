import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import { Register } from "./Pages/Register";
import RegisterProduct from "./Pages/RegisterProduct";
import ProtectedRoutes from "./utils/ProtectedRouters";
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: (
          <Dashboard>
            <Outlet />
          </Dashboard>
        ),
        children: [
          {
            path: "/dashboard",
            element: <RegisterProduct />,
          },
          {
            path: "/dashboard/productList",
            element: <ProductList />,
          },
        ],
      },
      {
        path: "/dashboard/productList",
        element: [
          <Dashboard>
            <Outlet />
          </Dashboard>,
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="flex justify-center bg-stone-800 h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
