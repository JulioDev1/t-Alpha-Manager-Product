import {
  IconAlignBoxCenterTop,
  IconBuildingStore,
  IconLogout,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
export function Dashboard({ children }: any) {
  return (
    <>
      <div className="w-full">
        <div className="flex h-full ">
          <nav className=" w-1/6 border border-stone-800 border-r-stone-700">
            <div className="flex items-center justify-start border border-stone-800  border-b-stone-700 p-5">
              <h1 className="font-bold text-zinc-50 text-xl">T-ALPHA</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <Link
                  className="font-medium flex gap-4  justify-start items-center  p-5 text-zinc-50 h-20"
                  to="/dashboard"
                >
                  <IconBuildingStore color="#1289f8" size={25} /> Create Product
                </Link>
                <Link
                  className="font-medium flex items-center  gap-4 justify-start p-5 text-zinc-50 h-20"
                  to="/dashboard/productList"
                >
                  <IconAlignBoxCenterTop color="#1289f8" size={25} />
                  All Products
                </Link>
              </div>
            </div>
            <div className="font-medium flex gap-4 justify-start items-center p-5 text-zinc-50 h-20">
              <IconLogout color="#1289f8" size={25} />
              Logout
            </div>
          </nav>
          <div className="w-full flex justify-center ">{children}</div>
        </div>
      </div>
    </>
  );
}
