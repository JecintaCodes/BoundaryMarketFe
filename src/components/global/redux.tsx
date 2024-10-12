import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // boundarymarket: {
  user: {},
  toggle: false,
  cart: [],
  list: [], // Verify list exists
  // },
};

const redux = createSlice({
  name: "boundarymarket",
  initialState,
  reducers: {
    logInUser: (state: any, { payload }) => {
      state.user = payload;
    },
    logOutUser: (state: any) => {
      state.user = null;
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
    // addToList: (state: any, { payload }) => {
    //   let check = state.list.findIndex((el: any) => el._id === payload._id);

    //   if (check >= 0) {
    //     state.list[check].amount;
    //   } else {
    //     const data = {
    //       ...payload,
    //     };
    //     state.list.push(data);
    //   }

    //   //
    // },
    emptyList: (state: any) => {
      state.list = [];
    },
    addToList: (state, { payload }) => {
      const existingItemIndex = state.list.findIndex(
        (item) => item.title === payload.title
      );

      if (existingItemIndex >= 0) {
        // Update amount of existing item
        return {
          ...state,
          list: state.list.map((item, index) =>
            index === existingItemIndex
              ? { ...item, amount: item.amount + payload.amount }
              : item
          ),
        };
      } else {
        // Add new item to list
        return { ...state, list: [...state.list, payload] };
      }
    },
    // createAddList: (state, { payload }) => {
    //   console.log("Creating list:", payload);
    //   return { ...state, list: payload.list };
    // },
    createAddList: (state, { payload }) => {
      state.list = payload; // Verify this line
    },
    removeFromList: (state: any, { payload }) => {
      state.list = state.list.filter((el: any) => el._id !== payload._id);
    },
  },
});

export const {
  logOutUser,
  logInUser,
  addToCart,
  removeFromCart,
  emptyCart,
  removeQTYfromCart,
  addToList,
  removeFromList,
  createAddList,
  emptyList,
} = redux.actions;

export default redux.reducer;
