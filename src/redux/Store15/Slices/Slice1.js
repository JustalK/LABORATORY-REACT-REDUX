import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
  endpoints: (builder) => ({
    call1: builder.query({
      query: (number) => `?results=${number}`,
      keepUnusedDataFor: 5,
      transformResponse: (response) => response.results
    })
  })
})

export const { useCall1Query } = api
export default api
