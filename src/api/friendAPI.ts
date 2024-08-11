import axios from "axios";
const URL: string = "http://localhost:2003/api/v1";

export const addFriend = async (userID: string, friendID: string) => {
  try {
    return await axios
      .post(`${URL}/${userID}/${friendID}/be-friend`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const unFriend = async (userID: string, friendID: string) => {
  try {
    return await axios
      .post(`${URL}/${userID}/${friendID}/un-friend`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
