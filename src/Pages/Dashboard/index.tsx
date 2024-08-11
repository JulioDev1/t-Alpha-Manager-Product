import {
  IconAlignBoxCenterTop,
  IconBuildingStore,
  IconLogout,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
export function Dashboard({ children }: any) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="w-full">
        <div className="flex h-full ">
          <nav className=" w-1/5 flex flex-col justify-between border border-stone-800 border-r-stone-700">
            <div className="flex flex-col flex-start justify-start ">
              <h1 className="font-bold text-zinc-50 text-xl border  border-stone-800  border-b-stone-700 p-5">
                T-ALPHA
              </h1>
              <div>
                <Link
                  className="font-medium flex gap-4  justify-start items-center p-5 text-zinc-50 h-20"
                  to="/dashboard"
                >
                  <div className="flex items-center justify-center rounded-md w-10 h-10 bg-blue-600/20">
                    <IconBuildingStore color="#1289f8" size={25} />
                  </div>
                  Create Product
                </Link>
                <Link
                  className="font-medium flex items-center p-5 gap-5 justify-start text-zinc-50 h-20"
                  to="/dashboard/productList"
                >
                  <div className="flex items-center justify-center rounded-md w-10 h-10 bg-blue-600/20">
                    <IconAlignBoxCenterTop color="#1289f8" size={25} />
                  </div>
                  All Products
                </Link>
              </div>
            </div>
            <div className="font-medium flex p-5 gap-4 justify-start items-center text-zinc-50 h-20 border border-stone-800  border-t-stone-700 ">
              <button
                onClick={logout}
                className="flex items-center cursor-pointer justify-center rounded-md w-10 h-10 bg-blue-600/20"
              >
                <IconLogout color="#1289f8" size={25} />
              </button>
              Logout
            </div>
          </nav>
          <div className="w-full flex justify-center border border-stone-800  border-t-stone-700 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
