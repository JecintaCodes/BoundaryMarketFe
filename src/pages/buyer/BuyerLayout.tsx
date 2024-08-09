import { Outlet } from "react-router-dom"
import BuyerHeader from "./BuyerHeader"
import BuyerSlider from "./BuyerSlider"

const UserLayout = () => {
  return (
    <div className="w-[100%]  relative "> 
    <BuyerHeader/>
      <div className="flex gap-[20px]  ">
          <div className="w-[20%] fixed left-0 z-50 ">
          <BuyerSlider
          />
          </div>
          <div className="absolute right-0 w-[80%]  ">
          <Outlet/>
          </div>
      </div>
  </div>
  )
}

export default UserLayout