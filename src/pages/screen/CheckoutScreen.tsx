import { AiFillDelete, AiOutlineRight } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  emptyCart,
  removeFromCart,
  removeQTYfromCart,
} from "../../components/global/redux";
import { updateStockProduct } from "../../api/Product";
import axios from "axios";
import { useState } from "react";

const CheckoutScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  let dispatch = useDispatch();
  let cart = useSelector((state: any) => state.cart);
  let user = useSelector((state: any) => state.user);
  console.log(cart);
  const makePaymentApiCall = async () => {
    console.log("object");
    setToggle(true);
    await axios
      .post(`http://localhost:2003/api/v1/make-payment`, {
        email: user?.email,
        amount: 10000,
        // cart ?.reduce((a, b) => {
        //           return a + b;
        //         },)},
      })
      .then((res: any) => {
        console.log("object", res.data.data);
        window.location.replace(res.data.data.authorization_url);
      })
      .finally(() => {
        setToggle(false);
      });
  };
  console.log(makePaymentApiCall);
  return (
    <div className="mt-10">
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border rounded-md p-3">
          <div className="my-5">Shopping Cart</div>

          <hr />

          <div>
            {cart?.map((props: any) => (
              <div className="flex items-center mb-5 ">
                <img
                  className="w-[150px] h-[150px] object-cover mr-6"
                  src={props?.img}
                  alt="dummy"
                />

                <div className="w-[300px]">
                  <div>{props?.title}</div>
                  <div>₦{props?.amount}</div>
                </div>
                <div className="mr-1">
                  Stock: {props?.QTYinStock - props?.QTY}
                </div>
                <div className=" mr-12 flex items-center border ">
                  <div className="mx-4">{props?.QTY}</div>
                  <div>
                    {props?.QTYinStock - props?.QTY > 0 ? (
                      <div
                        className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg]"
                        onClick={() => {
                          dispatch(addToCart(props));
                        }}
                      >
                        <AiOutlineRight />
                      </div>
                    ) : (
                      <div
                        className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg] text-gray-300 "
                        onClick={() => {}}
                      >
                        <AiOutlineRight />
                      </div>
                    )}
                    <div
                      className="border-r-0 border-l-2 p-2 rotate-90 border border-t-0 "
                      onClick={() => {
                        dispatch(removeQTYfromCart(props));
                      }}
                    >
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>

                <div className="w-[100px] mr-8 font-bold ">
                  ₦{props.amount * props.QTY}
                </div>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromCart(props));
                  }}
                >
                  <AiFillDelete size={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border rounded-md p-3 ">
          <div className="flex justify-between items-center">
            <div>
              {cart.length}
              Items
            </div>
            <div>
              {/* ₦ 500 */} ₦
              {cart
                ?.map((el: any) => {
                  return el.QTY * el.amount;
                })
                ?.reduce((a, b) => {
                  return a + b;
                }, 0)}
              {/* {cart?.map()?.reduce()} */}
            </div>
          </div>

          {/* <Link to="/make-payment"> */}
          <button
            className="bg-black text-white w-full mt-4 h-12 rounded-md duration-300 transition-all hover:scale-[1.004] flex justify-center items-center "
            onClick={() => {
              for (let i of cart) {
                updateStockProduct(i._id, i.QTY);
                dispatch(emptyCart());
              }
              makePaymentApiCall();
            }}
          >
            {toggle ? (
              <div>
                <FaSpinner />
              </div>
            ) : (
              <div>Proceed</div>
            )}
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
