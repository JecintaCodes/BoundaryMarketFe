import { useState } from "react";
import { useSelector } from "react-redux";
import { createList } from "../../api/Product";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

const AddList = () => {
  const [listItems, setListItems] = useState([{}]); // Initialize with one item
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: any) => state?.user);
  // console.log(user?._id);
  const navigate = useNavigate();

  const handleAddItem = () => {
    setListItems([...listItems, {}]);
  };

  const handleRemoveItem = (index) => {
    setListItems(listItems.filter((item, i) => i !== index));
  };

  const handleItemChange = (index, field, value) => {
    const updatedListItems = [...listItems];
    updatedListItems[index][field] = value;
    setListItems(updatedListItems);
  };
  interface ListItems {
    title: string;
    amount: string;
  }

  const listItem: ListItems[] = [];
  const calculateTotal = (data: ListItems[]) => {
    return data.reduce((acc, item: any) => acc + item.amount, 0);
  };

  const handleSubmit = async (data: ListItems[]) => {
    const url = `localhost:2003/api/v1/${user?._id}/create-list`;
    console.log(user?._id);
    const jsonData = JSON.stringify(data);

    try {
      setLoading(true);
      const response = await axios.post(url, jsonData);
      console.log(response);
      const totalAmount =
        response.data.length > 0 ? calculateTotal(response.data) : 0;
      navigate("/check-out", { state: { totalAmount } });
      console.log(totalAmount);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(listItem);

  const handleClick = () => {
    handleSubmit(listItem);
    setListItems([]);
  };

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
            {listItems.map((item: any, index) => (
              <div
                key={index}
                className="w-[100%] h-[40px] rounded border flex items-center text-[12px] font-semibold mt-[25px] mb-2 "
              >
                {/* left */}
                <div className="w-[70%] h-[100%] border-r-[1px]  border-r-[silver]  ">
                  <input
                    className="w-[100%] h-[100%] outline-none border-none border-r-[1px] p-1 border-r-[silver]"
                    type="text"
                    placeholder="add item"
                    value={item?.title}
                    onChange={(e) =>
                      handleItemChange(index, "name", e.target.value)
                    }
                  />
                </div>
                {/*end left */}
                <div className="w-[20%] h-[100%] ">
                  <input
                    className="w-[100%] h-[100%] border-none outline-none p-1 "
                    type="number"
                    placeholder=" amount"
                    value={item?.amount}
                    onChange={(e) =>
                      handleItemChange(index, "amount", e.target.value)
                    }
                  />
                </div>

                <div className="w-[10%] h-[100%] text-[8px] font-bold text-[red] flex justify-center items-center  border-l-[1px] hover:cursor-pointer hover:duration-700 border-l-[silver] ">
                  <div onClick={() => handleRemoveItem(index)}>Delete</div>
                </div>
                {/*end right */}
              </div>
            ))}
            {/* butt */}
            <div className=" w-[100%] flex justify-between items-center text-[11px] font-bold mt-[20px] ">
              <button
                className="p-2 bg-[#456104] rounded text-[white] hover:duration-700 hover:transition-all hover:scale-[1.05] "
                type="button"
                onClick={handleAddItem}
              >
                Add Item
              </button>
              <button
                className="p-2 hover:duration-700 hover:transition-all hover:scale-[1.05] bg-[#fa9608] rounded text-[white] "
                type="button"
                onClick={handleClick}
              >
                {loading ? (
                  <div>
                    <FaSpinner />
                  </div>
                ) : (
                  <div>Submit List</div>
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
