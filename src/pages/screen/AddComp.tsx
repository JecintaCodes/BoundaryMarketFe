import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const AddComp = () => {
  return (
    <div className="fixed bottom-0 text-[12px]">
      <div className=" p-3 flex items-center text-[30px] text-[#fa9608] relative animate-pulse ">
        <Link to="/add-pro">
          <IoIosCreate />
        </Link>
        <Link to="/check-out">
          <AiOutlineShoppingCart />
          <div className="flex items-center justify-center rounded-full bg-red-500 text-white text-[12px] w-[20px] h-[20px] absolute top-1 right-2  ">0
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddComp;
