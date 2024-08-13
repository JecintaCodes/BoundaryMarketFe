import { Link } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import { useDispatch, useSelector } from "react-redux";
import { oneBuyerHooks } from "../../hook/BuyerHook";
import { allProductsHooks } from "../../hook/ProductHook";
import { addToCart } from "../../components/global/redux";
import DetailProductScreen from "../screen/DetailProductScreen";
import { allStoreHooks, getOneStoreHooks } from "../../hook/StoreHook";
// import { readStore } from "../../api/StoreApi";

const Product = () => {
  // const { data } = oneBuyerHooks();
  const { allProduct } = allProductsHooks();
  const dispatch = useDispatch();
  // const buyer;
  // const { allStore } = allStoreHooks();

  const buyer = useSelector((state: any) => state?.myBuyer);
  console.log(buyer);
  const user = useSelector((state: any) => state?.myUser);
  console.log(buyer);
  const admin = useSelector((state: any) => state?.myAdmin);
  console.log(buyer);

  return (
    <div>
      <ProductHeader />
      <div className="w-[100%] h-[100%] flex justify-center ">
        <div className="w-[90%] small:w-[90%] mobile:w-[90%]   ">
          <div className="mt-[20px]">
            Hello {buyer?.name || user?.name || admin?.name}
          </div>
          <div className="text-[20px] mt-[20px] font-bold text-[#456104] ">
            Welcome to Beauty store
          </div>
          <div className="flex items-center gap-[35px] mobile:gap-[40px] small:w-[100%] small:gap-[] flex-wrap   ">
            {/* card */}
            {allProduct &&
              allProduct?.map((props: any) => (
                <div
                  className="w-[200px] h-[230px] border mt-[30px] rounded-[10px] overflow-hidden small:w-[150px] mobile:w-[150px] "
                  key={props?._id}
                >
                  {/* image */}
                  <img
                    className="w-[100%] h-[60%] rounded-sm transition-all hover:scale-[1.1] hover:cursor-pointer  duration-700 "
                    src={props?.image}
                    alt="pinimg"
                  />
                  {/*end image */}
                  {/* name */}
                  <div className="w-[100%] mt-[15px]  ">
                    <div
                      className="text-[13px] mt-[-10px] font-bold text-center
  "
                    >
                      Orang{props?.title}
                    </div>
                  </div>{" "}
                  {/*end name */}
                  <div className=" w-[100%] h-[20px]  flex justify-center  gap-[20px] hover:cursor-pointer mb-[5px]  ">
                    <div className="text-[12px]  ">{"⭐".repeat(5)}</div>
                    <div className="font-bold text-[12px] ">
                      {props?.amount}
                    </div>
                  </div>
                  <div className="flex  justify-end w-[100%] ">
                    {/* <Link to="/check-out"> */}
                    <div
                      className="flex items-center h-[40px] mx-1 text-white bg-hover:cursor-pointer bg-[#456104] px-3 hover:cursor-pointer duration-700 transition-all hover:scale-[1.05] rounded-sm text-[12px] text-center leading-tight"
                      onClick={() => {
                        dispatch(addToCart(props));
                      }}
                    >
                      Add to Cart
                    </div>
                    {/* </Link> */}
                  </div>
                  {/* card */}
                </div>
                // {props?.toggle && <DetailProductScreen props={props} />}
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
