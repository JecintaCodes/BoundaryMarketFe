import { Outlet } from "react-router-dom"
import UserHeader from "./UserHeader"
import UserProfileScreen from "./UserProfileScreen"
import UserSlider from "./UserSlider"
const UserLayout = () => {
  return (
    <div className="w-[100%]  relative "> 
    <UserHeader/>
      <div className="flex gap-[30px] justify-between ">
          <div className="w-[200px] fixed left-0 z-50 ">
          <UserSlider
          />
          </div>
          <div className="absolute right-[300px] w-[500px]  ">
          <Outlet/>
          </div>
          <div className="w-[230px] fixed right-0 ">
          <UserProfileScreen/>
          </div>
      </div>
  </div>
  )
}

export default UserLayout