import useSWR from "swr";
import {
  readOneUserProduct,
  readProduct,
  ViewProductOrder,
} from "../api/Product";
import { useSelector } from "react-redux";

export const useProduct = (userID: string, storeID: string) => {
  const { data } = useSWR("/get-one-product", readProduct, {
    refreshInterval: 1000,
  });

  return { data, userID, storeID };
};

export const useProductOrder = (userID: string) => {
  const { data } = useSWR(`/${userID}/get-one-product`, ViewProductOrder, {
    refreshInterval: 1000,
  });

  return { data, userID };
};

export const allProductsHooks = () => {
  const { data: allProduct, isLoading } = useSWR(
    `get-all-product`,
    readProduct,
    {
      refreshInterval: 5000,
    }
  );
  return { allProduct, isLoading };
};
export const oneUserProductHook = () => {
  const userID = useSelector((state: any) => state?.user);
  const { data, isLoading } = useSWR(
    `${userID}/view-user-products`,
    () => readOneUserProduct(userID!),
    { refreshInterval: 5000 }
  );
  return { data, isLoading };
};
// export const oneUserHook = () => {
//   const userID = useSelector((state: any) => state.user);

//   const { data, isLoading } = useSWR(
//     `${userID}/get-one-user`,
//     () => getOneUser(userID!),
//     { refreshInterval: 5000 }
//   );
//   return { data, isLoading };
// };
