import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { emptyList, removeFromList } from "../../components/global/redux";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const ListCheckout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const lists = useSelector((state: any) => state?.list);
  console.log(lists);
  const user = useSelector((state: any) => state?.user);
  const calculateTotalAmount = () => {
    return lists
      ?.map((item) => item.amount)
      ?.reduce((acc, amount) => acc + amount, 0);
  };

  console.log("reading lists screen.....");
  const makePaymentApiCall = async () => {
    setLoading(true);
    try {
      const totalAmount = calculateTotalAmount();
      const response = await axios.post(
        `https://boundarymarket.onrender.com/api/v1/make-payment`,
        {
          // .post(`http://localhost:2003/api/v1/make-payment`, {
          email: user?.email,
          amount: totalAmount.toString(),
        }
      );
      window.location.replace(response.data.data.authorization_url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-[100%] h-[100%]  ">
      <div className="container w-[90%] mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
          Checkout
        </h1>
        <div className="flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col  w-[100%]   ">
          {lists?.map((props: any) => (
            <div
              key={props?._id}
              className="w-[100%] h-[50px]  border-[silver] border-[2px] mb-3 p-2 "
            >
              <div className="flex justify-between ">
                {" "}
                {props?.title ? (
                  <p className="text-lg w-[60%] md:text-xl lg:text-[2xl]">
                    {props.title}
                  </p>
                ) : (
                  <p>Title not available</p>
                )}
                {isNaN(props?.amount) ? (
                  <p>Amount: Unknown</p>
                ) : (
                  <p className="text-lg md:text-xl lg:text-2xl w-[30%] ">
                    ₦{props.amount}
                  </p>
                )}
                <div
                  onClick={() => {
                    dispatch(removeFromList(props));
                  }}
                >
                  <AiFillDelete color="red" size={30} />
                </div>
              </div>
            </div>
          ))}
          <div className="w-[100%]  md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-10">
            <div className="bg-gray-100 p-4 rounded md:p-6 lg:p-8 xl:p-10 2xl:p-12">
              <div className="flex justify-between">
                <div className="flex gap-1 items-center ">
                  <p className="text-2xl md:text-3xl lg:text-2xl font-semibold">
                    {lists?.length}
                  </p>
                  <p className="text-lg md:text-xl lg:text-1xl"> Lists</p>
                </div>
                <div className="flex gap-2 items-center ">
                  <p className="text-lg md:text-xl lg:text-1xl">Total:</p>
                  <p className="text-2xl md:text-3xl lg:text-2xl font-semibold">
                    ₦{calculateTotalAmount()}
                  </p>
                </div>
              </div>

              <button
                className="bg-orange-500 mt-3 w-[100%] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-8 xl:px-10 2xl:py-10 2xl:px-10"
                // onClick={makePaymentApiCall}
                onClick={() => {
                  for (let i of lists) {
                    // updateStockProduct(i._id, i.QTY);
                    dispatch(emptyList());
                  }
                  makePaymentApiCall();
                }}
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
    </div>
  );
};

export default ListCheckout;
