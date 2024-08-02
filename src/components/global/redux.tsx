import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myUser: {},
    myBuyer: {},
    myAdmin: {},
  };
  
  

const redux = createSlice({
  name: "boundarymarket",
  initialState,
  reducers: {
    loginUser: (state: any, { payload }) => {
        state.myUser = payload;
      },
      loginBuyer:(state:any, {payload})=>{
        state.myBuyer = payload;
      },
      loginAdmin:( state:any, { payload } )=>{
        state.myAdmin = payload;
      },
      logOutUser: (state: any) => {
        state.myUser = null;
      },
      logOutBuyer:(state:any)=>{
        state.myBuyer = null;
      },
      logOutAdmin:(state:any)=>{
        state.myAdmin = null
      }
  }
});

export const {loginAdmin,loginBuyer,loginUser,logOutAdmin,logOutBuyer,logOutUser} = redux.actions

export default redux.reducer