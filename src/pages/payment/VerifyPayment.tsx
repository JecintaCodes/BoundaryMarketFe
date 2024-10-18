import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const VerifyPayment = () => {
  const user = useSelector((state: any) => state?.user);

  const { search } = useLocation();

  const refID = search.split("reference=")[1];

  const VerifyPaymentApiCall = async () => {
    axios
      .post("https://boundarymarket.onrender.com/api/v1/verify-payment", {
        // .post("http://localhost:2003/api/v1/verify-payment", {
        refNumb: refID,
        email: user?.email,
      })
      .then((res) => {
        console.log("return", res);
        if (res.data.data.data.gateway_response === "Successful") {
          console.log("Payment verified successfully!");
        } else {
          console.log(
            "Payment verification failed:",
            res.data.data.data.gateway_response
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(res.data.data.data.gateway_response);
  };

  useEffect(() => {
    VerifyPaymentApiCall();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-[#f7f7f7]">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6 2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-green-500">
            Payment Successful!
          </h2>
          <p className="text-lg text-gray-600">
            Thank you for using Boundary Market!
          </p>
          <p className="text-md text-gray-500">
            Your goods will be delivered to you soon.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/product">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyPayment;
