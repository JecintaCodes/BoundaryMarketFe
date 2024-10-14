import { useSelector } from "react-redux";
import { useOneUserProductOrder } from "../../hook/ProductHook";

const HistoryPage = () => {
  // const userID = useSelector((state: any) => state?.user);
  // const { oneUserOrder } = useOneUserProductOrder(userID);
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 md:mb-6 lg:mb-8">Order History</h1>
      {/* {oneUserOrder &&
        oneUserOrder.length > 0 &&
        oneUserOrder.map((order: any) => ( */}
      <div
        // key={order?._id}
        className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8 flex flex-col "
      >
        <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
          Order
          {/* #{order?._id} */}
        </h2>
        <div className="flex flex-wrap justify-between md:flex-nowrap">
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3">
            Name:
            {/* {order?.productOwner}  */}
          </p>
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3">
            UserID:
            {/* // {order?.userID}  */}
          </p>
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3 md:ml-4 lg:ml-6">
            Phone Number:
            {/* // {order?.phoneNumb}   */}
          </p>
        </div>
        <div className="flex flex-wrap justify-between md:flex-nowrap">
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3">
            Product:
            {/* {order?.title} */}
          </p>
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3 md:ml-4 lg:ml-6">
            Date:
            {/* {order?.createdAt} */}
          </p>
        </div>
        <div className="flex flex-wrap justify-between md:flex-nowrap">
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3">
            Address:
            {/* {order?.address} */}
          </p>
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3 md:ml-4 lg:ml-6">
            Time:
            {/* //  {order?.createdAtTime} */}
          </p>
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3 md:ml-4 lg:ml-6">
            Qty:
            {/* {order?.QTYOrder} */}
          </p>
          <p className="text-gray-600 md:text-lg lg:text-xl w-full md:w-1/2 lg:w-1/3 md:ml-4 lg:ml-6">
            Time:
            {/* {order?.amountPaid}  */}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 md:text-lg lg:text-xl">
            Status:
            {/* <span
                  className={`py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
                    ${
                  //   order?.status === "pending"
                  //     ? "bg-orange-100 text-orange-800"
                  //     : order.status === "processing"
                  //     ? "bg-blue-100 text-blue-800"
                  //     : order.status === "shipped"
                  //     ? "bg-green-100 text-green-800"
                  //     : order.status === "delivered"
                  //     ? "bg-green-200 text-green-900"
                  //     : "bg-red-100 text-red-800"
                  }`
                }
                >
                  {/* {order?.status} */}
            {/* </span> */}
          </p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default HistoryPage;
