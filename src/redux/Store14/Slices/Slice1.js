import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const jsonplaceholderApi = createApi({
  reducerPath: 'jsonplaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ body }) => ({
        url: `posts`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useCreatePostMutation } = jsonplaceholderApi
export default jsonplaceholderApi
