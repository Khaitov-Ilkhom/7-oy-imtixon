import { api } from "./index";
import {FieldType} from "../../routes/auth/login/Login.tsx";
import {Response, ResponseT} from "../../types";

const authApi = api.injectEndpoints?.({
  endpoints: (build) => ({
    signUp: build.mutation<ResponseT, void>({
      query: (body) => ({
        url: "/users/add",
        method: "POST",
        body
      })
    }),
    signIn: build.mutation<Response, FieldType>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body
      })
    })
  })
})

export const {useSignInMutation, useSignUpMutation} = authApi;