import axios from "axios";

const URL:string = "http://localhost:2003/api/v1"
// const URL: string = "https://boundarymarket.onrender.com/api/v1";

export const createStore = async (data: any, userID: any) => {
  try {
    const config: any = {
        "content-type": "multipart/form-data",
      };
    return await axios
      .post(`${URL}/${userID}/create-store`, { data, userID },config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readStore = async () => {
  try {
    return await axios.get(`${URL}/get-store`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchCategory = async () => {
  try {
    return await axios.get(`${URL}/search-store-category`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchName = async () => {
  try {
    return await axios.get(`${URL}/search-store-name`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

// export const signInStore = async (data: any) => {
//   try {
//     return await axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
//       return res.data.data;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getOneStore = async (storeID: any) => {
  try {
    return await axios
      .get(`${URL}/:storeID/get-one-store`, storeID)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const adminDeleteStore = async (adminID:any,storeID: any) => {
  try {
    return await axios
      .get(`${URL}/:adminID/:storeID/admin-delete-store`,{adminID, storeID})
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const userDeleteStore = async (userID:any,storeID: any) => {
  try {
    return await axios
      .get(`${URL}/:userID/:storeID/user-delete-store`,{userID, storeID})
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const getOneStoreProducts = async (storeID: any) => {
  try {
    return await axios
      .get(`${URL}/:storeID/store-products`, storeID)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
// export const getOneStoreUser = async (storeID:any,userID:any) => {
//   try {
//     return await axios
//       .get(`${URL}/:storeID/:userID/get-one-store-user`, {storeID,userID})
//       .then((res: any) => {
//         return res.data.data;
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const updateUsernImage = async (userID: any) => {
//   const config: any = {
//     "content-type": "multipart/form-data",
//   };
//   return axios
//     .patch(`${URL}/:userID/update-image`, userID, config)
//     .then((res) => {
//       return res.data.data;
//     });
// };
// export const updateUserName = async (userID: any, data: any) => {
//   return axios
//     .patch(`${URL}/:userID/update-name`, { userID, data })
//     .then((res: any) => {
//       return res.data.data;
//     });
// };
// export const updateUserDetail = async (userID: any, data: any) => {
//   return axios
//     .patch(`${URL}/:userID//:userID/update-detail`, { userID, data })
//     .then((res) => {
//       return res.data.data;
//     });
// };
// export const updateUserInfo = async (userID: any, data: any) => {
//   const config: any = {
//     "content-type": "multipart/form-data",
//   };
//   return axios.patch(`${URL}/:userID/update-info`, { userID, data }, config);
// };
