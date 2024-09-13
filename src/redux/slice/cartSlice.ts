
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart:JSON.parse(localStorage.getItem('carts') as string) || [],
}

const CartSlice = createSlice({
  name: 'addCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)
      const productIndex = state?.cart?.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        state.cart.push(action.payload);
      }
      localStorage.setItem("carts" , state.cart);
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
      localStorage.setItem("carts", state.cart);
    }
  }
})

export const {reducer} = CartSlice
export const {addToCart, removeCart} = CartSlice.actions;