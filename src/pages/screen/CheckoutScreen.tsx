import { AiFillDelete, AiOutlineRight } from "react-icons/ai";

const CheckoutScreen = () => {


  return (
    <div className="mt-10">
      <div className="w-full flex justify-center mb-8 ">
        <div className="w-[95%] border rounded-md p-3">
          <div className="my-5">Shopping Cart</div>

          <div>

              <div className="flex items-center overflow-hidden ">
                <img
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                alt="img"
                  className="w-[150px] h-[150px] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all object-cover mr-6"
                 
                />

                <div className="w-[300px] font-semibold text-[15px] mall:mr-[20px] small:text-[12px] ">
                  <div className="small:text-[12px]">Laptop</div>
                  <div className="small:text-[12px] s">₦80,0000</div>
                </div>
                {/* <div className="mr-1 text-[13px] font-semibold  ">
                  Stock: 80,000
                </div> */}
                <div className=" mr-12 flex text-[15px] font-semibold small:text-[13px]  items-center border ">
                  <div className="mx-4">80,000</div>
                  <div>
                  
                      <div
                        className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg]"
                     
                      >
                        <AiOutlineRight />
                      </div>
                  
                      <div
                        className="border-r-0 border-l-2 border-b-0 p-2 border rotate-[-90deg] text-gray-300 "
                      >
                        <AiOutlineRight />
                      </div>
                 
                    <div
                      className="border-r-0 border-l-2 p-2 rotate-90 border border-t-0 "
                    >
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>

                <div className="w-[100px]  mr-8 text-[13px]   font-bold ">
                  ₦80,000
                </div>
                <div
                  className="hover:cursor-pointer text-[#fd8605] " >
                  <AiFillDelete size={30} />
                </div>
              </div>
          
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center  mb-8 overflow-hidden ">
        <div className="w-[95%] border rounded-md p-3  flex justify-center flex-col items-center ">
          <div className="flex justify-between gap-2 items-center text-[13px] font-semibold ">
            <div>1 Items</div>
            <div>
              ₦ 80,000
             
            </div>
          </div>

          <button
            className="bg-[#456104] text-white w-[50%] mt-4 h-12 rounded-md  transition-all duration-700 hover:scale-[1.05] ">
            Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
