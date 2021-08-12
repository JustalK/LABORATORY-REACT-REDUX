import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
  endpoints: (builder) => ({
    call1: builder.query({
      query: (number) => `?results=${number}`,
      transformResponse: (response) => response.results
    }),
    call2: builder.query({
      query: () => `?gender=female`
    }),
    call3: builder.query({
      query: () => `?gender=female`
    })
  })
})

export const { useCall1Query, useCall2Query, useCall3Query } = api
export default api
