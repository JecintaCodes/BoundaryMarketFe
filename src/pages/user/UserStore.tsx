// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { oneUserProductHook } from "../../hook/ProductHook";
import LoaderScreen from "../loading/LoaderScreen";

// const UserStore = () => {
//   const userID = useSelector((state: any) => state?.user);
//   const { isLoading, oneProduct } = oneUserProductHook();
//   console.log("reading user....", userID);
//   return (
//     <div>
//       {/* {isLoading ? (
//         <div>
//           {Array.from({ length: 20 }, () => (
//             <LoaderScreen />
//           ))}
//         </div>
//       ) : ( */}
//       <div className="w-[100%] h-[100%] flex justify-center ">
//         <div className="w-[90%] small:w-[90%] mobile:w-[90%]   ">
//           <div className="mt-[20px]">welcome {userID?.name} to your store</div>
//           <div className="flex items-center gap-[35px] mobile:gap-[40px] small:w-[100%] small:gap-[] flex-wrap   ">
//             {/* card */}
//             {oneProduct &&
//               oneProduct?.map((props: any) => (
//                 <div
//                   className="w-[200px] h-[230px] border mt-[30px] rounded-[10px] overflow-hidden small:w-[150px] mobile:w-[150px] "
//                   key={props?._id}
//                 >
//                   {/* image */}
//                   <img
//                     className="w-[100%] h-[60%] rounded-sm transition-all hover:scale-[1.1] hover:cursor-pointer object-cover  duration-700 "
//                     src={props?.img}
//                     alt="pinimg"
//                   />
//                   {/*end image */}
//                   {/* name */}
//                   <div className="w-[100%] mt-[15px]  ">
//                     <div
//                       className="text-[13px] mt-[-10px] font-bold text-center
//   "
//                     >
//                       {props?.title}
//                     </div>
//                   </div>{" "}
//                   {/*end name */}
//                   <div className=" w-[100%] h-[20px]  flex justify-center  gap-[20px] hover:cursor-pointer mb-[5px]  ">
//                     <div className="text-[12px]  ">{"⭐".repeat(5)}</div>
//                     <div className="font-bold text-[12px] ">
//                       ₦{props?.amount}
//                     </div>
//                   </div>
//                   {/* <div className="flex  justify-end w-[100%] ">
//                       {/* <Link to="/check-out"> */}
//                   {/* <div
//                       className="flex items-center h-[40px] mx-1 text-white bg-hover:cursor-pointer bg-[#456104] px-3 hover:cursor-pointer duration-700 transition-all hover:scale-[1.05] rounded-sm text-[12px] text-center leading-tight"
//                       onClick={() => {
//                         dispatch(addToCart(props));
//                       }}
//                     >
//                       Add to Cart
//                     </div> */}
//                   {/* </Link> */}
//                   {/* </div> */}
//                   {/* card */}
//                 </div>
//                 // {props?.toggle && <DetailProductScreen props={props} />}
//               ))}
//           </div>
//         </div>
//       </div>
//       {/* )} */}
//     </div>
//   );
// };
// import { oneUserProductHook } from "./oneUserProductHook";

const UserStore = () => {
  const { oneProduct, isLoading } = oneUserProductHook();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {oneProduct.name}</p>
      <p>Email: {oneProduct.email}</p>
      <p>Address: {oneProduct.address}</p>
      <p>Phone Number: {oneProduct.telNumb}</p>

      {oneProduct.myStore.map((store, index) => (
        <div key={index}>
          <h3>Store {index + 1}</h3>
          <p>Store ID: {store}</p>
        </div>
      ))}
    </div>
  );
};

export default UserStore;
