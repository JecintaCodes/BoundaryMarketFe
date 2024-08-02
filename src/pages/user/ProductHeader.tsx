import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const ProductHeader = () => {
  return (
    <div className="w-[100%] h-[90px] bg-[#456104] flex justify-center ">
      <div className="w-[90%] small:w-[100%] mobile:w-[100%] flex justify-between items-center ">
        <h1 className="text-4xl small:hidden mobile:hidden  text-[white] small:text-[px] mobile:-[0px] ">BmMarket</h1>
        <div className="small:flex mobile:flex justify-center hidden items-center gap-[5px] ">
          <CiMenuBurger
          fontSize={20}
          color="#fd8605"
          fontWeight={800}
          />
        <h1 className="text-[white] text-lg ">BmMarket</h1>
        </div>
        {/* search */}
        <div className=" flex gap-2 items-center  ">
         <div className=" flex justify-between items-center w-[300px] border-white border-[2px] small:w-[130px] mobile:w-[130px] rounded-sm">
         <IoIosSearch
          fontSize={20}
          color="white"
        
          />

          <input
          className="w-[250px] h-[50px] rounded-sm outline-none border-none bg-transparent text-[12px] font-bold text-white ml-[5px] small:h-[35px] mobile:h-[35px]  "
          type="search" placeholder="Search Products" name="" id="" />

         </div>
          <button
           type="submit"
           className="p-2 small:p-[5px] mobile:px-[5px] small:text-[10px] mobile:text-[10px] bg-[#fd8605] text-[white] rounded-sm text-[13px] font-semibold h-[50px] small:mr-[10px] mobile:mr-[10px] small:h-[35px] mobile:h-[35px] "
           >SEARCH</button>
        </div>
        {/*end search */}
        {/* account */}
       <div className="flex gap-3 mobile:hidden small:hidden justify-center items-center ">
        {/* firstCom */}
            <div className=" flex justify-center gap-1 items-center text-[white] border-[#fd8605] h-[50px] p-1 text-[13px] border-[1px] ">
            <VscAccount className="cursor-pointer"
            fontSize={20}
            />
              <p className="hover:cursor-pointer hover:text-[#fd8605] font-bold text-[14px] ">Account</p>
              <MdOutlineKeyboardArrowDown className="hover:cursor-pointer"
              fontSize={20}
              />
            </div>
        {/*end firstCom */}
        {/* secondCom */}
       <Link to="/check-out">
       <div className="flex  gap-1 justify-center items-center ">
          <div className="relative">
          <FaCartPlus className="hover:cursor-pointer hover:text-[#fd8605] "
          fontSize={30}
          color="white"
          />
            <div className="absolute hover:cursor-pointer text-white p-1 rounded-[50%] h-[15px] flex justify-center  items-center bg-[#fd8605] text-[10px] font-bold top-[0] animate-bounce right-0 ">0</div>
          </div>
          <div className="text-[white] font-bold hover:cursor-pointer hover:text-[#fd8605] ">Cart</div>
        </div>
       </Link>
        {/* secondCom */}
       </div>
        {/*end account */}
      </div>
    </div>
  )
}

export default ProductHeader