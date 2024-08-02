import { Link, useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUser } from "../../api/UserApi";
import { PulseLoader } from "react-spinners";

const UserRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // const adminID = ((state:any)=>state.myAdmin)
  const { adminID } = useParams();
  console.log(adminID, "Hry");

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().lowercase(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
    // secretCode: yup.string().required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    const { email, name, password } = data;
    // if (!data.secretCode || data.secretCode !== "AjegunleCore") {
    //   alert("go and collect the right secret code from the personnel");
    // }
    createUser({ email, name, password,  }, adminID).then(() => {
      reset();
      navigate("/user-sign-in");
    });
    setLoading(false);
  });
  // console.log(loading);
  return (
    <div
      className="w-[100%] h-[100vh] flex justify-center items-center  "
      style={{
        background: "rgba(179, 184, 231, 0.25)",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: " blur( 4px )",
        // border:"1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-[350px] small:w-[80%] mobile:w-[80%] mobile:text-[14px] p-[20px] rounded bg-[white] min-h-[400px]  "
      >
        <div className="text-center font-semibold text-[18px] text-[#b5b1b1] small:text-[14px] ">
          Registration
        </div>

        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Jecinta  "
          {...register("name")}
        />
        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="email"
          placeholder="email "
          {...register("email")}
        />
        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="password"
          placeholder="password "
          {...register("password")}
        />
        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="password"
          placeholder="confirmPassword "
          {...register("confirmPassword")}
        />

        <button
          onClick={() => {
            alert("Clicked");
          }}
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px]  hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
          type="submit"
          style={{
            background: "rgba(179, 184, 231, 0.25)",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: " blur( 4px )",
          }}
        >
          {loading ? (
            <>
              <PulseLoader />
            </>
          ) : (
            "Sign Up"
          )}
        </button>
        <div className="w-[100%] h-[50px] mt-[20px] flex justify-center gap-2 text-[12px] ">
          <div>Already have an account?</div>
          <Link to="/user-sign-in">
            <div>Sign in</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
