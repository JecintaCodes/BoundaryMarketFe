import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import { oneUserListHook } from "../../hook/ProductHook";

const ListCheckout = () => {
  const { userHook } = oneUserListHook();
  const [loading, setLoading] = useState<boolean>(false);

  const checkOut = ({ lists }) => {
    const totalAmount = lists
      .map((item) => item.amount)
      .reduce((acc, amount) => acc + amount, 0);
    return totalAmount;
  };

  // let cart = useSelector((state: any) => state.cart);
  let user = useSelector((state: any) => state.user);

  // const totalAmount = cart
  //   ?.map((el: any) => {
  //     return el.QTY * el.amount;
  //   })
  //   ?.reduce((a, b) => {
  //     return a + b;
  // }, 0);

  const makePaymentApiCall = async () => {
    console.log("object");
    setLoading(true);
    await axios
      .post(`http://localhost:2003/api/v1/make-payment`, {
        email: user?.email,
        amount: checkOut,
      })
      .then((res: any) => {
        console.log("object", res.data.data);
        window.location.replace(res.data.data.authorization_url);
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
        Checkout
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 ">
          {userHook &&
            userHook?.map((props: any) => (
              <div
                key={props?._id}
                className="flex justify-between mb-2 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 border p-1 rounded "
              >
                <p className="text-lg md:text-xl lg:text-2xl">{props?.title}</p>
                <p className="text-lg md:text-xl lg:text-2xl">
                  ₦{props?.amount}
                </p>
              </div>
            ))}
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-10">
          <div className="bg-gray-100 p-4 rounded md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            <p className="text-lg md:text-xl lg:text-2xl">Total:</p>
            <p className="text-2xl md:text-3xl lg:text-4xl">
              ₦50
              {/* {lists 
      ?.map((item) => item.amount)
      ?.reduce((acc, amount) => acc + amount, 0);
              } */}
            </p>
            {/* // {cart */}
            {/* //   ?.map((el: any) => { */}
            {/* //     return el.QTY * el.amount; */}
            {/* //   }) */}
            {/* //   ?.reduce((a, b) => { */}
            {/* //     return a + b; */}
            {/* //   }, 0)} */}
            <button
              className="bg-orange-500 mt-3 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-8 xl:px-10 2xl:py-10 2xl:px-12"
              // onClick={makePaymentApiCall}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <FaSpinner /> <div>Proceed to Payment....</div>
                </div>
              ) : (
                <div>Proceed to Payment</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCheckout;
