import useSWR from "swr";
import { getOneStore, readStore } from "../api/StoreApi";

export const allStoreHooks = () => {
  const { data: allStore, isLoading } = useSWR(`get-store`, readStore, {
    refreshInterval: 5000,
  });
  return { allStore, isLoading };
};
export const getOneStoreHooks = (storeID: string) => {
  const { data: oneStore, isLoading } = useSWR(
    `${storeID}/get-one-store`,
    getOneStore,
    {
      refreshInterval: 5000,
    }
  );
  return { oneStore, isLoading };
};
// export const oneAdminHooks = () => {
//   const adminID = useSelector((state: any) => state.myAdmin);

//   const { data, isLoading } = useSWR(
//     `${adminID}/get-one-admin`,
//     () => getOneAdmin(adminID!),
//     { refreshInterval: 5000 }
//   );
//   return { data, isLoading };
// };
