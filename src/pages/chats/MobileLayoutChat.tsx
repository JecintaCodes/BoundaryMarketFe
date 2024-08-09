import InnerChat from "./InnerChat"
import Sider from "./Sider"

const MobileLayoutChat = () => {
  return (
    <div className="flex">
        <div>
        <Sider/>
        </div>
        <div>
            <InnerChat/>
        </div>
    </div>
  )
}

export default MobileLayoutChat