import {
  IconAlignBoxCenterTop,
  IconBrandCashapp,
  IconBuildingStore,
  IconLogout,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../store/authSlice";
export function Dashboard({ children }: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    navigate("/");
  };

  return (
    <>
      <div className="flex w-full h-full ">
        <nav className="w-fit sm:min-w-[262px] left-0  flex flex-col justify-between border border-stone-800 border-r-stone-700">
          <div className="flex flex-col flex-start justify-start ">
            <div className="flex gap-2 items-center justify-center  border border-stone-800  border-b-stone-700 p-5">
              <IconBrandCashapp size={30} color="green" />
              <h1 className="font-bold text-zinc-50 text-xl hidden sm:block">
                T-ALPHA
              </h1>
            </div>
            <div>
              <Link
                className="font-medium flex gap-4  justify-start items-center p-5 "
                to="/dashboard"
              >
                <div className="flex items-center justify-center rounded-md w-[48px] h-[48px] bg-blue-600/20">
                  <IconBuildingStore color="#1289f8" size={25} />
                </div>

                <span className="text-base hidden sm:block text-zinc-50">
                  {" "}
                  Create Product
                </span>
              </Link>
              <Link
                className="font-medium flex items-center p-5 gap-4 justify-start h-20"
                to="/dashboard/productList"
              >
                <div className="flex items-center justify-center rounded-md w-[48px] h-[48px] bg-blue-600/20">
                  <IconAlignBoxCenterTop color="#1289f8" size={25} />
                </div>

                <span className="text-base hidden sm:block text-zinc-50">
                  All Product
                </span>
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
            <span className="text-base  hidden sm:block">Logout</span>
          </div>
        </nav>
        <div className="w-full flex justify-center border border-stone-800  border-t-stone-700">
          {children}
        </div>
      </div>
    </>
  );
}
