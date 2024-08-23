import useSWR from "swr";
import { readProduct, ViewProductOrder } from "../api/Product";

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
