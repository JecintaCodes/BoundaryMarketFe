import { oneUserProductHook } from "../../hook/ProductHook";
import { useSelector } from "react-redux";

const UserStore = () => {
  const userID = useSelector((state: any) => state?.user);
  const { oneProduct, isLoading, error } = oneUserProductHook(userID);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!oneProduct) {
    return <div>No data available</div>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto">
        <div className="mt-10 text-sm text-center">
          welcome {userID?.name} to your store
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {/* card */}
          {oneProduct?.map((props: any) => (
            <div
              key={props._id}
              className="w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-128 border rounded-lg overflow-hidden shadow-md"
            >
              {/* image */}
              <img
                src={props.img}
                alt="pinimg"
                className="w-full h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 object-cover rounded-t-lg"
              />
              {/*end image */}
              {/* name */}
              <div className="p-4 text-sm text-center">
                <div className="font-bold">{props.title}</div>
                <div className="text-xs text-gray-600">{props.description}</div>
              </div>{" "}
              {/*end name */}
              <div className="p-4 flex justify-center gap-4 text-sm">
                <div className="text-xs">{"⭐".repeat(5)}</div>
                <div className="font-bold">₦{props.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStore;
