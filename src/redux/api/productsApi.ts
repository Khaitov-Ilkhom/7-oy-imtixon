import {api} from "./index.ts";
import {Recipe} from "../../types";


const productsApi = api.injectEndpoints?.({
  endpoints: (build) => ({
    allProducts: build.query<{recipes: Recipe[]}, void>({
      query: () => ({
        url: "/recipes",
      }),
      providesTags: ["RECIPE"]
    }),
    getProduct: build.query<Recipe, any>({
      query: (id) => ({
        url: `/recipes/${id}`,
      }),
      providesTags: ["RECIPE"]
    }),
    searchRecipe: build.query({
      query: (params) => ({
        url: "/recipes/search",
        params
      }),
      providesTags: ["RECIPE"]
    }),
  })
})

export const {useAllProductsQuery, useGetProductQuery, useSearchRecipeQuery} = productsApi