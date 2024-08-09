import { Link } from "react-router-dom";
import { allStoreHooks } from "../../hook/StoreHook";


const Store = () => {

    const {allStore} = allStoreHooks();

  return (
    <div>
        <h1 className="ml-[60px] font-semibold text-[20px]  mt-[30px] ">General Market</h1>
      <div className="flex mt-[30px] justify-center flex-wrap">
           
            {
                allStore?.map((props:any)=>(
                    <div
              className="w-[220px] small:w-[40%] mobile:w-[45%]  overflow-hidden h-[265px] m-2 flex justify-center gap-[20px] items-center  rounded-[7px] flex-col  "
            >
              <Link
              className="w-[100%]"
              to="/product">
                <img
                  className="w-[100%] h-[200px] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 transition-all"
                  src={props?.image}
                />
              </Link>

              <div className="w-[100%] h-[100px] mt-[-15px] ">
                <div className="flex justify-bettween gap-[5px] items-center">
                  <img
                  className="w-[50px] h-[40px] rounded-[50%] hover:cursor-pointer hover:scale-[1.05] duration-700 transition-all   "
                  src={props?.image} alt="pinimg" />
                  <div className="text-[12px] ">
                    <div className="text-[12px] font-bold ">{props?.storeNumber}</div>
                    <div className="text-[12px] font-bold ">{props?.storeEmail}</div>
                    <div className="text-[12px] font-bold ">_{props?.storeSocialMediaAccount}</div>
                  </div>
                </div>
              </div>
              </div>
                ))
            }
         
           
         
      </div>
    </div>
  );
};

export default Store;
