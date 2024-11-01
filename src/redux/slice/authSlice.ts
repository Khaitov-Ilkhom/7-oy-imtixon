import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TInitialState = {
  token: string | null
}

const initialState: TInitialState = {
  token: JSON.parse(localStorage.getItem("token")) || ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload
      localStorage.setItem("token", JSON.stringify(state.token))
    },
    logOut: (state) => {
      state.token = ""
      localStorage.removeItem("token")
    }
  }
});

export const {reducer} = authSlice
export const {signIn, logOut} = authSlice.actions;

