import axios from "axios";


// const URL:string = "http://localhost:2003/api/v1"
const URL:string = "https://boundarymarket.onrender.com/api/v1"


export const createBuyer = async(data:any)=>{
    try {
        return await axios.post(`${URL}/register-buyer`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signInBuyer = async(data:any)=>{
    try {
        return await axios.post(`${URL}/sign-in-buyer`, data).then((res:any)=>{
           
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllBuyers = async()=>{
    try {
        return await axios.get(`${URL}/get-all-buyer`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getOneBuyer = async(buyerID:any)=>{
    try {
        return await axios.get(`${URL}/:buyerID/get-one-buyer`,buyerID).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}