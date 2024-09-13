
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Recipe} from "../../types";

interface IInitialState {
  cart: Recipe[]
}

const initialState: IInitialState = {
  cart:JSON.parse(localStorage.getItem('carts') as string) || [],
}

const CartSlice = createSlice({
  name: 'addCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Recipe>) => {
      console.log(action.payload)
      const productIndex = state?.cart?.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        state.cart.push(action.payload);
      }
      localStorage.setItem("carts" , state.cart);
    },
    removeCart: (state, action: PayloadAction<Recipe>) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
      localStorage.setItem("carts", state.cart);
    }
  }
})

export const {reducer} = CartSlice
export const {addToCart, removeCart} = CartSlice.actions;