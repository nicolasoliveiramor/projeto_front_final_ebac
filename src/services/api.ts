import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<RestaurantInterface[], void>({
      query: () => 'restaurantes'
    }),
    getSelectedRestaurant: builder.query<RestaurantInterface, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantQuery,
  useGetSelectedRestaurantQuery,
  usePurchaseMutation
} = api
