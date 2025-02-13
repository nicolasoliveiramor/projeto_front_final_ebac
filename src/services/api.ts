import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteInterface } from '../models'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestauranteInterface[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteEspecifico: builder.query<RestauranteInterface, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteEspecificoQuery } = api
