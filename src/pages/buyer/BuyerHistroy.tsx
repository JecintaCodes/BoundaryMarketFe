import {AiOutlineClockCircle} from "react-icons/ai"

const BuyerHistory = () => {
  return (
    <div className=" w-[100%] h-[100%] flex justify-center bg-[#f1eeee] ">
    <div className="w-[90%] small:w-[100%] mobile:w-[100%] h-[100%] mt-[30px] ">

    {/* histroys */}
    <div className=" mt-[50px] ">
        <div className=" text-[17px] font-semibold ">Your Histroy </div>
    </div>
    
    <div className=" mt-[50px] w-[100%] h-[100%] p-[20px]  bg-[white]  rounded-[10px] ">
    
    <div className=" w-[100%] h-[50px] mt-[25px] mobile:h-[200px] small:h-[200px] p-[5px]  flex items-center ">
        {/* date */}
        <div className="w-[20%] text-[14px] font-semibold ">12 Jan 2024</div>
        {/*end date */}
        {/* time */}
        <div className=" w-[10%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] ">
            <AiOutlineClockCircle className="text-[17px] ml-[10px]  "/>  
    <div>08:00</div>
        </div>
        {/* time */}
    <div className=" w-[70%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] ">
        Product Apple Watch Series 4 Added to Cart and beign purchased
    </div>
    </div>

    
    </div>
    {/*end histroys */}
    </div>
        </div>
  )
}

export default BuyerHistory