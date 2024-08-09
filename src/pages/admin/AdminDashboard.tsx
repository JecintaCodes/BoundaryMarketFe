import { FaNairaSign,FaPeopleGroup } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { FaBorderNone } from "react-icons/fa";
import { CiBag1 } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
// import GeneralChart from "../../chart/GeneralChart";


const AdminDashboard = () => {

  // const label = ['January', 'February', 'March'];
  // const data = [10, 20, 30];



  const datas = [
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
    <div className="w-[100%] h-[100%]   ">
       
     <div className="w-[100%] h-[100%] flex justify-center ">
     <div className="w-[90%] ">
        <div className="text-[25px] text-[#456104] font-bold mt-[20px] mobile:text-[15px] "> Dashboard </div>
        {/* card */}
          <div className="w-[100%] mt-[40px] flex gap-[30px] small:gap-[20px] mobile:gap-[35px] flex-wrap  ">
      {
        datas?.map((props:any)=>(
          <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
         <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] " >
        {props?.icon}
         </div>
    
          <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">{props?.title} </div>
          <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">{props?.total}</div>
          </div>
        ))
      }
          </div>
       {/* end card */}
       </div>
    
     </div>

     {/* <div className="w-[100%] h-[100%] flex justify-center">
      <div className="w-[90%] ">
      <div>
      <GeneralChart labels={label} data={data} />
    </div>

      </div>
     </div> */}
    </div>
  )
}

export default AdminDashboard