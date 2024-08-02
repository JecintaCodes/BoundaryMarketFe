import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminProfileScreen from "./AdminProfileScreen"
import AdminSlider from "./AdminSlider"

const AdminLayout = () => {
  return (
    <div className="w-[100%]  relative "> 
      <AdminHeader/>
        <div className="flex gap-[30px] justify-between ">
            <div className="w-[200px] fixed left-0 z-50 ">
            <AdminSlider
            />
            </div>
            <div className="absolute right-[300px] w-[500px]  ">
            <Outlet/>
            </div>
            <div className="w-[230px] fixed right-0 ">
            <AdminProfileScreen/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout