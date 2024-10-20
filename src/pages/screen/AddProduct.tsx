import { useState } from "react";
import { createProduct } from "../../api/Product";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";

const AddProduct = () => {
  const userID = useSelector((state: any) => state?.user);
  console.log(userID);
  const [title, setTitle] = useState("");
  const [amount, setAmount]: any = useState(0);
  const [image, setImage]: any = useState(0);
  const [QTYinStock, setQTYinStock]: any = useState(0);
  const [description, setDescription]: any = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const formData = new FormData();

  formData.append("title", title);
  formData.append("amount", amount);
  // formData.append("rating", rating);
  formData.append("QTYinStock", QTYinStock);
  formData.append("description", setDescription);
  formData.append("image", image);

  const onhandleImageUpload = (e: any) => {
    let file = e.target.files[0];
    //  const readFile = URL.createObjectURL(file);
    setImage(file);
    //  setAvatar(readFile);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12 p-5 md:p-10 lg:p-20 rounded-md shadow-md z-[2]">
      <button className="absolute top-4 right-4 text-lg text-gray-500 hover:text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
        Add Product
      </h2>
      <div className="flex flex-col">
        <input
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={onhandleImageUpload}
          className="hidden"
          id="image"
        />
        <label
          htmlFor="image"
          className="bg-[#456104] text-white p-2 rounded-sm cursor-pointer mb-4"
        >
          Upload Image
        </label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={QTYinStock}
          onChange={(e) => setQTYinStock(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <button
          className="bg-[#fa9608] text-white p-2 rounded-sm cursor-pointer"
          onClick={() => {
            createProduct(formData, userID._id).then((res) => {
              console.log(res);
            });
          }}
        >
          {loading ? <FaSpinner /> : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
