import { FaNairaSign,FaPeopleGroup } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { FaBorderNone } from "react-icons/fa";
import { CiBag1 } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
// import { Chat } from '@chatjs/chat';


const AdminDashboard = () => {

  const data = [
    {
      icon:<FaNairaSign/>,
      title:"Total Revenue",
      total:"₦12400"
    },
    {
      icon:<FaBorderNone/>,
      title:"Total Order",
      total:"₦12400"
    },
    {
      icon:<GiExpense/>,
      title:"Total Expenses",
      total:"₦12400"
    },
    {
      icon:<FaPeopleGroup/>,
      title:"Total Customer",
      total:"₦12400"
    },
    {
      icon:<CiBag1/>,
      title:"Total Sales",
      total:"₦12400"
    },
    {
      icon:<MdPerson/>,
      title:"Total Users",
      total:"₦12400"
    },
    {
      icon:<FaNairaSign/>,
      title:"Total Revenue",
      total:"₦12400"
    },
    {
      icon:<MdPerson/>,
      title:"Total Admins",
      total:"₦12400"
    },
    {
      icon:<FaNairaSign/>,
      title:"Total Revenue",
      total:"₦12400"
    },
    {
      icon:<MdPerson/>,
      title:"Total Buyers",
      total:"₦12400"
    },
  ]
  return (
    <div className="w-[100%] h-[100%] flex justify-center  ">
       
       <div className="w-[90%] ">
        <div className="text-[25px] text-[#456104] font-bold mt-[20px] "> Dashboard </div>
        {/* card */}
          <div className="w-[100%] mt-[40px] flex gap-[50px] flex-wrap  ">
      {
        data?.map((props:any)=>(
          <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05]  ">
         <div className="text-[#456104] font-bold text-[17px] " >
        {props?.icon}
         </div>
    
          <div className="text-[15px] font-semibold mt-[10px] text-[#456104]   ">{props?.title} </div>
          <div className="text-[15px] font-bold mt-[10px] ">{props?.total}</div>
          </div>
        ))
      }
          </div>
       {/* end card */}
       </div>
    

     
    </div>
  )
}

export default AdminDashboard