import { useSelector } from "react-redux";
import useSWR from "swr";
import { getAllBuyers, getOneBuyer } from "../api/BuyerApi";



export const oneBuyerHooks = () => {
  const buyerID = useSelector((state: any) => state.myBuyer);

  const { data, isLoading } = useSWR(
    `${buyerID}/get-one-buyer`,
    () => getOneBuyer(buyerID!),
    { refreshInterval: 5000 }
  );
  return { data, isLoading };
};

export const allBuyerHooks = () => {
  const { data: allBuyer, isLoading } = useSWR(`get-all-buyer`, getAllBuyers, {
    refreshInterval: 5000,
  });
  return { allBuyer, isLoading };
};
