// import {
//   AiOutlineSearch,
//   AiOutlineArrowDown,
//   AiOutlineTrademarkCircle,
//   AiOutlineMail,
//   AiOutlinePlusCircle,
import moment from "moment";

import { Link } from "react-router-dom";
import { allOrdersHooks } from "../../hook/ProductHook";
// import { date } from "yup";
const RealOrder = () => {
  const date = moment(Date.now());
  // Format as YYYY-MM-DD HH:mm:ss
  const formattedDate = date.format("ddd MMM D, YYYY");

  // console.log(formattedDate);
  // } from "react-icons/ai";
  const time = moment().format("hh:mm:ss A");
  // console.log(time); // Output: 02:30:00 PM
  const { allOrder } = allOrdersHooks();
  return (
    <div className="flex flex-wrap justify-center">
      {allOrder &&
        allOrder.length > 0 &&
        allOrder.map((order: any) => (
          <div
            key={order?._id}
            className="bg-white  mt-[15px] shadow-md rounded-md p-4 m-4 w-[100%] small:w-[100%] mobile:-[100%] mobilel:w-[100%]"
          >
            <h2 className="text-lg font-bold">Order #{order?._id}</h2>
            <p className="text-gray-600  mt-[15px]">
              Product Owner: {order?.productOwner}
            </p>
            {/* <p className="text-gray-600  mt-[15px]">
              QtyOrdered: {order?.QTYOrder}
            </p>
            <p className="text-gray-600  mt-[15px]">
              Address: {order?.address}
            </p>
            <p className="text-gray-600  mt-[15px]">
              PhoneNumber: {order?.phoneNumb}
            </p> */}
            <p className="text-gray-600  mt-[15px]">Date: {formattedDate}</p>
            <p className="text-gray-600  mt-[15px]">Time: {time} </p>
            <p className="text-gray-600 mt-[15px] ">
              Status:
              <span
                className={`py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ${
                  order?.status === "pending"
                    ? "bg-orange-100 text-orange-800"
                    : order.status === "processing"
                    ? "bg-blue-100 text-blue-800"
                    : order.status === "shipped"
                    ? "bg-green-100 text-green-800"
                    : order.status === "delivered"
                    ? "bg-green-200 text-green-900"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {order?.status}
              </span>
            </p>
            <p className="text-gray-600  mt-[15px]">
              Total: ₦{order?.amountPaid}
            </p>
            <div className="flex justify-end">
              <Link to="/admin/histroys">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                  View
                </button>
              </Link>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                Edit
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
const OrderScreen = () => {
  return (
    <div className="container mx-auto p-4 sm:p-2 md:p-4 lg:p-6 xl:p-8">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
        Orders
      </h1>
      <div className="flex justify-between mb-4 flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap">
        <div className="flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <input
            type="search"
            placeholder="Search orders by customer name, order ID, or email"
            className="w-full py-2 pl-10 text-sm sm:text-base md:text-[13px] lg:text-[13px] xl:[text]-[13px] text-gray-700 border-silver"
          />
        </div>
        <div className="flex-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-end">
          <select className="py-2 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
            <option value="">Filter by status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-100 sm:bg-gray-200 md:bg-gray-100 lg:bg-gray-50 xl:bg-gray-100">
            <th className="px-4 py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
              Order #
            </th>
            <th className="px-4 py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
              Customer
            </th>
            <th className="px-4 py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">Date</th>
            <th className="px-4 py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
              Status
            </th>
            <th className="px-4 py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">Total</th>
            <th className="px-4 py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{/* Orders data will be rendered here */}</tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l sm:py-1 sm:px-2 md:py-2 md:px-4 lg:py-3 lg:px-6 xl:py-4 xl:px-8">
          Previous
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-2 md:px-4 lg:py-3 lg:px-6 xl:py-4 xl:px-8">
          Next
        </button>
      </div>
    </div>
  );
};
const Order = () => {
  return (
    <div className="w-[100%] h-[100%] ">
      <div>
        <OrderScreen />
      </div>
      <div>
        <RealOrder />
      </div>
    </div>
  );
};

export default Order;
