import axios from "axios";


// const URL:string = "http://localhost:2003/api/v1"
const URL:string = "https://boundarymarket.onrender.com/api/v1"


// export const createAdmin = async(data:any) => {
//     try {
//       data.secretCode = "AjegunleCore"; // Add the secret code to the data object
//       return await axios.post(`${URL}/register-admin`, data).then((res:any) => {
//         return res.data.data
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
export const createAdmin = async(data:any)=>{
    try {
       return await axios.post(`${URL}/register-admin`,data).then((res:any)=>{
        return res.data.data
       })
    } catch (error) {
        console.log(error)
    }
}

export const signINAdmin = async (data: any)=>{
    try {
        return await axios.post(`${URL}/sign-in-admin`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllAdmin = async()=>{
    try {
       return await axios.post(`${URL}/get-all-admin`).then((res:any)=>{
        return res.data.data
       })
    } catch (error) {
        console.log(error)
    }
}

export const getOneAdmin = async(adminID:any)=>{
    try {
        return await axios.get(`${URL}/:adminID/get-one-admin`,adminID).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateAdminImage = async(adminID:any)=>{
    const config: any = {
        "content-type": "multipart/form-data",
      };
    return axios.patch(`${URL}/:adminID/admin-update-avatar`,adminID,config).then((res)=>{
        return res.data.data
    })
}
export const updateAdminName = async(adminID:any,data:any)=>{
    return axios.patch(`${URL}/:adminID/update-admin-name`,{adminID,data}).then((res:any)=>{
        return res.data.data
    })
}
export const updateAdminDetail = async(adminID:any,data:any)=>{
    return axios.patch(`${URL}/:adminID/update-admin-detail`,{adminID,data}).then((res)=>{
        return res.data.data
    })
}
export const updateAdminInfo =async(adminID:any, data:any)=>{
    const config:any = {
        "content-type":"multipart/form-data",
    };
    return axios.patch(`${URL}/:adminID/update-admin-info`,{adminID,data},config)
}