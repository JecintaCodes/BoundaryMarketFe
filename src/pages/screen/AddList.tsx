import { useState } from "react";
import { useSelector } from "react-redux";
import { createList } from "../../api/Product";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const AddList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState();
  const [amount, setAmount] = useState<number>(0);
  const user = useSelector((state: any) => state?.user);
  const navigate = useNavigate();

  //   const handleList = async (data: any) => {
  //     setLoading(true);
  //     const { item, amount } = data;
  //     setItem(item);
  //     setAmount(amount);
  //     console.log("reading-data", { item, amount });
  //     createList(data, user?._id).then(() => {
  //       navigate("/check");
  //     });
  //     setLoading(false);
  //   };
  // const handleList = ()=>{
  //     setLoading(true);
  //     const newItem = item
  //     setItem(newItem)
  //     setAmount(amount)

  // }
  return (
    <div className="w-[100%] h-[100vh] flex justify-center ">
      <div className="w-[90%] mt-[20px] ">
        {/*big list */}
        <div>
          {/* up */}
          <div className=" w-[50%] h-[50px] flex items-center  small:w-[100%] mobile:w-[100%] mobilel:w-[100%] border justify-between p-2 text-[13px] font-bold rounded ">
            <div>Items</div>
            <div className="">Amount</div>
          </div>
          {/* up */}
          {/* lists */}
          <div className="w-[50%] small:w-[100%] mobile:w-[100%] mobilel:w-[100%] ">
            <div className="w-[100%] h-[40px] rounded border flex items-center text-[12px] font-semibold mt-[25px] mb-2 ">
              {/* left */}
              <div className="w-[70%] h-[100%] border-r-[1px]  border-r-[silver]  ">
                <input
                  className="w-[100%] h-[100%] outline-none border-none border-r-[1px] p-1 border-r-[silver]"
                  type="text"
                  placeholder="add item"
                  //   value={item}
                  //   onChange={(e: any) => setItem(e.target.value)}
                />
              </div>
              {/*end left */}
              <div className="w-[20%] h-[100%] ">
                <input
                  className="w-[100%] h-[100%] border-none outline-none p-1 "
                  type="number"
                  placeholder=" amount"
                  //   value={amount}8
                />
              </div>

              <div className="w-[10%] h-[100%] text-[8px] font-bold text-[red] flex justify-center items-center  border-l-[1px] hover:cursor-pointer hover:duration-700 border-l-[silver] ">
                <div>Delete</div>
              </div>
              {/*end right */}
            </div>
            {/* butt */}
            <div className=" w-[100%] flex justify-between items-center text-[11px] font-bold mt-[20px] ">
              <button
                className="p-2 bg-[#456104] rounded text-[white] hover:duration-700 hover:transition-all hover:scale-[1.05] "
                type="button"
              >
                add List
              </button>
              <button
                className="p-2 hover:duration-700 hover:transition-all hover:scale-[1.05] bg-[#fa9608] rounded text-[white] "
                type="button"
                // onClick={()=>{
                //     createList(handleList, user?._id)
                // }}
              >
                {loading ? (
                  <div>
                    <FaSpinner />
                  </div>
                ) : (
                  <div>submit List</div>
                )}
              </button>
            </div>
            {/*end butt */}
          </div>
          {/* lists */}
        </div>
        {/*end big list */}
      </div>
    </div>
  );
};

export default AddList;
