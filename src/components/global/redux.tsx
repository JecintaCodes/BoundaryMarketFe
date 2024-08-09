import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myUser: [],
    myBuyer: [],
    myAdmin: [],
    toggle:false,
    cart:[],
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
      },
      addToCart: (state: any, { payload }) => {
        let check = state.cart.findIndex((el: any) => el._id === payload._id);
  
        if (check >= 0) {
          state.cart[check].QTY += 1;
        } else {
          const data = {
            ...payload,
            QTY: 1,
          };
          state.cart.push(data);
        }
  
        //
      },
  
      removeFromCart: (state: any, { payload }) => {
        state.cart = state.cart.filter((el: any) => el._id !== payload._id);
      },
  
      emptyCart: (state: any) => {
        state.cart = [];
      },
  
      removeQTYfromCart: (state: any, { payload }) => {
        let check = state.cart.findIndex((el: any) => el._id === payload._id);
  
        if (state.cart[check].QTY > 1) {
          state.cart[check].QTY -= 1;
        } else if (state.cart[check].QTY === 1) {
          state.cart = state.cart.filter((el: any) => el._id !== payload._id);
        }
      },
  }
});

export const {loginAdmin,loginBuyer,loginUser,logOutAdmin,logOutBuyer,logOutUser, addToCart, removeFromCart, emptyCart, removeQTYfromCart} = redux.actions

export default redux.reducer