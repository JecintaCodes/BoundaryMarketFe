import useSWR from "swr";
import { readStore } from "../api/StoreApi";

export const allStoreHooks = () => {
    const { data: allStore, isLoading } = useSWR(`get-store`, readStore,{
      refreshInterval: 5000,
    });
    return { allStore, isLoading };
  };
  