import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  tagTypes: ['Post', 'PostsUseless'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post']
    }),
    getPosts2: builder.query({
      query: () => `posts`,
      providesTags: ['PostsUseless']
    }),
    createPost: builder.mutation({
      query: ({ body }) => ({
        url: `posts`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post']
    })
  })
})

export const { useGetPostsQuery, useGetPosts2Query, useCreatePostMutation } =
  api
export default api
