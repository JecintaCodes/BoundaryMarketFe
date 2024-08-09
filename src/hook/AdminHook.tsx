import { useSelector } from "react-redux";
import useSWR from "swr";
import { getAllAdmin, getOneAdmin, updateAdminInfo } from "../api/AdminApi";



export const oneAdminHooks = () => {
  const adminID = useSelector((state: any) => state.myAdmin);

  const { data, isLoading } = useSWR(
    `${adminID}/get-one-admin`,
    () => getOneAdmin(adminID!),
    { refreshInterval: 5000 }
  );
  return { data, isLoading };
};

export const allAdminHooks = () => {
  const { data: allAdmin, isLoading } = useSWR(`get-all-admin`, getAllAdmin, {
    refreshInterval: 5000,
  });
  return { allAdmin, isLoading };
};
export const AdminUpdateInfo = (adminID: string,data:any,config:FormData) => {
  const { data: adminrData, isLoading } = useSWR(
    `${adminID}/update-admin-info`,
    () => updateAdminInfo({data,adminID},config)
  );
  return { adminrData, isLoading };
};