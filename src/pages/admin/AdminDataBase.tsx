// Import necessary dependencies
import { allUserHook } from "../../hook/UserHook";
import bm from "../../assets/bmlogo.jpg";
import { Link } from "react-router-dom";

// Define the AdminDataBase component
const AdminDataBase = () => {
  // Use the allUserHook to fetch user data
  const { allUser } = allUserHook();

  // Render the component
  return (
    <table className="w-full table-auto text-left border-separate border-2 border-silver md:border-3 lg:border-4">
      <thead>
        <tr className="font-bold h-[35px] text-[12px] md:text-[12px] lg:text-[14px]">
          <th className="overflow-hidden px-4 py-2 border-b-2 border-gray-200 md:w-[350px] bg-red-100 lg:w-[400px] xl:w-[450px]">
            Name
          </th>
          <th className="overflow-hidden px-4 py-2 border-b-2 border-gray-200 md:w-[450px] lg:w-[500px] bg-[orange] xl:w-[550px]">
            Email
          </th>
          <th className="overflow-hidden px-4 py-2 border-b-2 border-gray-200 md:w-[150px] lg:w-[200px] bg-pink-100 xl:w-[250px]">
            AccNumb
          </th>
          <th className="overflow-hidden px-4 py-2 border-b-2 border-gray-200 md:w-[150px] lg:w-[200px] bg-orange-200 xl:w-[250px]">
            Telephone
          </th>
          <th className="overflow-hidden px-4 py-2 border-b-2 border-gray-200 md:w-[200px] lg:w-[300px] xl:w-[350px] bg-[green]">
            Address
          </th>
          <th className="overflow-hidden px-4 py-2 border-b-2 border-gray-200 md:w-[150px] lg:w-[200px] xl:w-[250px] bg-orange-100 ">
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {allUser &&
          allUser.length > 0 &&
          allUser.map((props: any) => (
            <tr
              className="font-medium border-b-[1px] md:border-b-2 lg:border-b-3 h-[80px] md:h-[100px] lg:h-[120px]"
              key={props?._id}
            >
              <td className="overflow-hidden md:w-[350px] lg:w-[400px] xl:w-[450px]  bg-red-100">
                <div className="flex gap-1 items-end">
                  {/* <Link to=""> */}
                  <img
                    className="w-[35px] h-[35px] rounded-[50%] object-cover hover:cursor-pointer transition-all hover:scale-[1.05] duration-700"
                    src={bm}
                    alt={bm}
                  />
                  {/* </Link> */}
                  <div className="text-[10px] md:text-[8px] lg:text-[11px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer">
                    {props?.name}
                  </div>
                </div>
              </td>
              <td className="overflow-hidden md:w-[450px] lg:w-[500px] xl:w-[550px] bg-[orange] ">
                <div className="flex items-end">
                  <div className="text-[12px] md:text-lg lg:text-[13px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer">
                    {props?.email}
                  </div>
                </div>
              </td>
              <td className="overflow-hidden md:w-[150px] lg:w-[200px] xl:w-[250px] bg-pink-200 ">
                <div className="flex items-end">
                  <div className="text-[12px] md:text-[12px] lg:text-[13px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer">
                    {props?.accountNumb}
                  </div>
                </div>
              </td>
              <td className="overflow-hidden md:w-[150px] lg:w-[200px] xl:w-[250px] bg-orange-200 ">
                <div className="flex items-end">
                  <div className="text-[12px] md:text-[12px] lg:text-[13px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer">
                    {props?.telNumb}
                  </div>
                </div>
              </td>
              <td className="overflow-hidden md:w-[200px] bg-[green] lg:w-[300px] xl:w-[350px]">
                <div className="flex items-end">
                  <div className="text-[12px] md:text-[12px] lg:text-[13px] font-bold hover:text-[#18fb18a9]  hover:cursor-pointer">
                    {props?.address}
                  </div>
                </div>
              </td>

              <td className="overflow-hidden md:w-[150px] bg-orange-100 lg:w">
                <div className="flex items-end">
                  <div className="text-[12px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer">
                    {props?.role}
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default AdminDataBase;
