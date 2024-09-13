import {api} from "./index.ts";
import {Recipe} from "../../types";


const productsApi = api.injectEndpoints?.({
  endpoints: (build) => ({
    allProducts: build.query<{recipes: Recipe[]}, void>({
      query: () => ({
        url: "/recipes",
      })
    }),
    getProduct: build.query<Recipe, number>({
      query: (id) => ({
        url: `/recipes/${id}`,
      })
    })
  })
})

export const {useAllProductsQuery, useGetProductQuery} = productsApi