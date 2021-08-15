import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: ['Post']
    }),
    createPost: builder.mutation({
      query: ({ body }) => ({
        url: `posts`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData('getPosts', undefined, (draft) => {
            draft.push(args)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      }
    })
  })
})

export const { useGetPostsQuery, useCreatePostMutation } = api
export default api
