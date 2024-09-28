import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { UserListHook } from "../../hook/ProductHook";
const UserListHook = () => {
  const [userHook, setUserHook] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userID = useSelector((state: any) => state.user);
  useEffect(() => {
    const fetchUserList = async () => {
      if (!userID || !userID._id) {
        console.log("invalid user");
      }
      try {
        const response = await axios.get(
          `http://localhost:2003/${userID?._id}/get-list`
        );
        console.log(response.data); // Inspect API response
        setUserHook(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("Unexpected error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserList();
  }, []);

  return { userHook, error, isLoading };
};

const ListCheckout = () => {
  const { userHook, error, isLoading } = UserListHook();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userHook || userHook.length === 0) return <div>No data available</div>;

  console.log(userHook); // Inspect userHook array

  const totalAmount = userHook.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
        Checkout
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4">
          {userHook?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between mb-3 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10"
            >
              <p className="text-lg md:text-xl lg:text-2xl">{item.title}</p>
              <p className="text-lg md:text-xl lg:text-2xl">${item.amount}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-10">
          <div className="bg-gray-100 p-4 rounded md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            <p className="text-lg md:text-xl lg:text-2xl">Total:</p>
            <p className="text-2xl md:text-3xl lg:text-4xl">₦{totalAmount}</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-8 xl:px-10 2xl:py-10 2xl:px-12">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCheckout;
