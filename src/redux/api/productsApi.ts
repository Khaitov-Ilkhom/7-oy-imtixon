import {api} from "./index.ts";


const productsApi = api.injectEndpoints?.({
  endpoints: (build) => ({
    allProducts: build.query({
      query: () => ({
        url: "/recipes",
      })
    }),
    getProduct: build.query({
      query: (id) => ({
        url: `/recipes/${id}`,
      })
    })
  })
})

export const {useAllProductsQuery, useGetProductQuery} = productsApi