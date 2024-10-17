const UserOrders = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 mb-4 md:mb-6 lg:mb-8">
        Order Details
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 md:pl-4 lg:pl-8">
          <h2 className="text-md md:text-lg lg:text-xl font-medium text-gray-700 mb-2 md:mb-4 lg:mb-6">
            Order Information
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-2 md:mb-4 lg:mb-6">
            Order ID: #12345
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-2 md:mb-4 lg:mb-6">
            Date: 2024-10-14
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-500">
            Total: ₦100.00
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 md:pr-4 lg:pr-8">
          <h2 className="text-md md:text-lg lg:text-xl font-medium text-gray-700 mb-2 md:mb-4 lg:mb-6">
            Order Items
          </h2>
          <div className="border-b border-gray-200 mb-2 md:mb-4 lg:mb-6">
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Product 1
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              $20.00 x 2 = ₦40.00
            </p>
          </div>
          <div className="border-b border-gray-200 mb-2 md:mb-4 lg:mb-6">
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Product 2
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              ₦30.00 x 1 = ₦30.00
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Product 3
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              ₦50.00 x 1 = ₦50.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
