import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const api = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
  endpoints: () => ({})
})

export default api
