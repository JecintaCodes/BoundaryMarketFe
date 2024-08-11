import axios from "axios";

// const URL:string = "http://localhost:2003/api/v1"
const URL: string = "https://boundarymarket.onrender.com/api/v1";

export const createUser = async (data: any, adminID: any) => {
  try {
    return await axios
      .post(`${URL}/:adminID/register-user`, { data, adminID })
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readUser = async () => {
  try {
    return await axios.get(`${URL}/get-all-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (userID: any) => {
  try {
    return await axios
      .get(`${URL}/:userID/get-one-user`, userID)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const updateUsernImage = async (userID: any) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return axios
    .patch(`${URL}/:userID/update-image`, userID, config)
    .then((res) => {
      return res.data.data;
    });
};
export const updateUserName = async (userID: any, data: any) => {
  return axios
    .patch(`${URL}/:userID/update-name`, { userID, data })
    .then((res: any) => {
      return res.data.data;
    });
};
export const updateUserDetail = async (userID: any, data: any) => {
  return axios
    .patch(`${URL}/:userID//:userID/update-detail`, { userID, data })
    .then((res) => {
      return res.data.data;
    });
};
export const updateUserInfo = async (userID: any, data: any) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return axios.patch(`${URL}/:userID/update-info`, { userID, data }, config);
};
