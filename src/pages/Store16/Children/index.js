/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler } from 'react'
import {
  useCreatePostMutation,
  useGetPostsQuery,
  useGetPosts2Query
} from '@redux/Store16/Slices/Slice1'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * When we use the mutation, it invalidate only the first query. Look at the store for understanding.
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const [createPost, { data, isLoading: isUpdating }] = useCreatePostMutation()
  const getPost1 = useGetPostsQuery()
  const getPost2 = useGetPosts2Query()

  if (isUpdating) {
    // return <div>Loading</div>
  }

  const handleClick = () => {
    createPost(
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    )
  }

  console.log(data, getPost1, getPost2)
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>
        <button onClick={() => handleClick()}>Mutate Posts</button>
      </div>
      <div>
        Number of data in 1st call :{' '}
        {getPost1.status === 'pending' ? 'Loading' : getPost1.data?.length}
      </div>
      <div>
        Number of data in 2nd call :{' '}
        {getPost2.status === 'pending' ? 'Loading' : getPost2.data?.length}
      </div>
    </Profiler>
  )
}

export default Home
