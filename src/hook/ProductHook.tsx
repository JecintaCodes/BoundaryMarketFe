import useSWR from "swr";
import { readProduct } from "../api/Product";

// export const useProduct = () => {
//     const { data, datas } = useSWR("/get-one-product", readProduct, {
//       refreshInterval: 1000,
//     });
  
//     return { data, datas };
//   };

export const allProductsHooks = () => {
    const { data: allProduct, isLoading } = useSWR(`get-all-product`, readProduct, {
      refreshInterval: 5000,
    });
    return { allProduct, isLoading };
  };
  