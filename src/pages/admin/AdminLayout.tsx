import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminSlider from "./AdminSlider"

const AdminLayout = () => {
  return (
    <div className="w-[100%]  relative "> 
      <AdminHeader/>
        <div className="flex  justify-between ">
            <div className="w-[20%] fixed left-0 z-50 ">
            <AdminSlider
            />
            </div>
            <div className="absolute right-0 w-[80%] mobile:w-[84%] mobilel:w-[84%] small:w-[84%]   ">
            <Outlet/>
            </div>
            
        </div>
    </div>
  )
}

export default AdminLayout