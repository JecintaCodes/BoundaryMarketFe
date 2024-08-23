import axios from "axios";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VerifyPayment = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const user = useSelector((state: any) => state?.user);
  // const cart = useSelector((state: any) => state?.cart);
  const { reference } = useParams();
  // , transactionID
  const VerifyPaymentApiCall = async () => {
    // console.log("object");
    setToggle(true);
    await axios
      .post(`http://localhost:2003/api/v1/verify-payment/${reference}`, {
        reference,
        email: user?.email,
        amount: 10000,
      })
      .then((res: any) => {
        window.location.replace(res.data.data.data.data.authorization_url);

        console.log("reading:", reference);
        // replace
        // (res.data.data.authorization_url);
        // console.log("object", res.data);
      })
      .finally(() => {
        setToggle(false);
      });
  };
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
      <div className="w-[50%] h-[150px] p-5 bg-[white] rounded ">
        <div className="text-[20px] font-bold text-[#456104] ">
          {user?.name} Your Payment Have been verified and is Status
        </div>
        <FaThumbsUp className="text-[20px] font-bold text-[#fa9608] " />
        <button onClick={VerifyPaymentApiCall}>verify</button>
      </div>
    </div>
  );
};

export default VerifyPayment;
