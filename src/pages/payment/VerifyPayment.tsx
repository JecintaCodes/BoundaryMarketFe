import axios from "axios";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const VerifyPayment = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const user = useSelector((state: any) => state?.user);
  const cart = useSelector((state: any) => state?.cart);

  const { search } = useLocation();
  const totalAmount = cart
    ?.map((el: any) => {
      return el.QTY * el.amount;
    })
    ?.reduce((a, b) => {
      return a + b;
    }, 0);

  // const refID = search.split("reference")[1];

  // const VerifyPaymentApiCall = async () => {
  //   try {
  //     const url: string = `http://localhost:2003/api/v1/verify-payment`;
  //     await axios.post(url, { refNub: refID }).then((res) => {
  //       if (res.data.data.data.gateway_response === "Successful") {
  //         const addPayment = {
  //             reference: refID,
  //             email:user?.email,
  //            amount: res.data.data.data.amount,
  //              status: "Successful",
  //       };
  //       await axios.post(url,addPayment).then(()=>{
  //          console.log("Payment verified and created successfully");

  //       })

  //         }
  //       },

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const VerifyPaymentApiCall = async () => {
  //   try {
  //     const url: string = `http://localhost:2003/apiv1/verify-payment`;

  //     axios.post(url, { refNumb: refID }).then((res) => {
  //       if (res.data.data.data.gateway_response === "Successful") {
  //         const addPayment = {
  //           reference: refID,
  //           email: user?.email,
  //           amount: res.data.data.data.amount,
  //           status: "successful",
  //         };
  //         axios.post(url, addPayment).then(() => {
  //           console.log("Payment verified and created successfully");
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const refID = search.split("reference")[1];
  const VerifyPaymentApiCall = async () => {
    try {
      const url: string = `http://localhost:2003/api/v1/verify-payment`;

      const paymentData = {
        reference: refID,
        email: user?.email,
        amount: totalAmount,
        status: "Successful",
      };
      await axios.post(url, paymentData).then((res) => {
        if (res.data.data.data.gateway_response === "Successful") {
          console.log("Payment verified and created successfully");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    VerifyPaymentApiCall();
  }, []);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100vh] "
      style={{
        background: "rgba(179, 184, 231, 0.25)",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: " blur( 4px )",
      }}
    >
      <div className="w-[45%] min-h-[80px] p-5 bg-[white] rounded ">
        <div className="text-[15px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] font-bold text-[#456104] ">
          {user?.name} Your Payment Have been verified and is SuccessFul
        </div>
        {/* <FaThumbsUp className="text-[20px] font-bold text-[#fa9608] " />
        <button>verifyied</button> */}
      </div>
    </div>
  );
};

export default VerifyPayment;
