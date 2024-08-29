// import { Link, useParams } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import { useDispatch, useSelector } from "react-redux";
import { allProductsHooks } from "../../hook/ProductHook";
import { addToCart } from "../../components/global/redux";
import LoaderScreen from "../LoaderScreen";
import { AiOutlineOrderedList } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = () => {
  const { allProduct, isLoading } = allProductsHooks();
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state?.user);

  return (
    <div>
      <ProductHeader />
      <Link to="/add-list">
        <div className=" fixed right-5 bottom-[100px] bg-[#456104] w-[50px] h-[60px] rounded-[50%] flex justify-center items-center small:w-[30px] small:h-[35px]   mobile:w-[30px] mobile:h-[35px]  mobilel:w-[30px] mobilel:h-[35px]   ">
          <AiOutlineOrderedList className="text-[30px] text-[#fa9608] small:text-[15px] mobile:text-[15px] mobilel:text-[15px] " />
        </div>
      </Link>
      {isLoading ? (
        <div className=" flex flex-wrap  ">
          {Array.from({ length: 20 }, () => (
            <LoaderScreen />
          ))}
        </div>
      ) : (
        <div className="w-[100%] h-[100%] flex justify-center ">
          <div className="w-[90%] small:w-[90%] mobile:w-[90%]   ">
            <div className="mt-[20px]">welcome {user?.name}</div>
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
                      className="w-[100%] h-[60%] rounded-sm transition-all hover:scale-[1.1] hover:cursor-pointer object-cover  duration-700 "
                      src={props?.img}
                      alt="pinimg"
                    />
                    {/*end image */}
                    {/* name */}
                    <div className="w-[100%] mt-[15px]  ">
                      <div
                        className="text-[13px] mt-[-10px] font-bold text-center
  "
                      >
                        {props?.title}
                      </div>
                    </div>{" "}
                    {/*end name */}
                    <div className=" w-[100%] h-[20px]  flex justify-center  gap-[20px] hover:cursor-pointer mb-[5px]  ">
                      <div className="text-[12px]  ">{"⭐".repeat(5)}</div>
                      <div className="font-bold text-[12px] ">
                        ₦{props?.amount}
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
      )}
    </div>
  );
};

export default Product;
