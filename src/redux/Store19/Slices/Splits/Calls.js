import api from '../Slice1'

const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    call1: builder.query({
      query: () => `?gender=female`
    })
  }),
  overrideExisting: false
})

export const { useCall1Query } = extendedApi
export default extendedApi
