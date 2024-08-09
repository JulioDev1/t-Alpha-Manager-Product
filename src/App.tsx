import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
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
