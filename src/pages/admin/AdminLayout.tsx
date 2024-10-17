import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSlider from "./AdminSlider";
import MobileSliderAdmin from "./MobileSlider";

const AdminLayout = () => {
  return (
    <div className="w-[100%]  relative ">
      <div className="fixed right-0 left-0 top-0 z-[-50px] ">
        <AdminHeader />
      </div>{" "}
      <div className="flex  justify-between ">
        <div className="w-[20%] fixed top-20 left-0 z-50 small:hidden mobile:hidden mobilel:hidden">
          <AdminSlider />
        </div>
        <div className="hidden fixed left-0 z-50 small:flex mobile:flex mobilel:flex  w-[10vw] ">
          <MobileSliderAdmin />
        </div>
        <div className="absolute right-0 w-[80%] mobile:w-[84%] mobilel:w-[84%] small:w-[84%] mt-[8%]   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
