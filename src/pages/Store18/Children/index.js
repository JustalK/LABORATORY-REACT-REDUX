/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler } from 'react'
import {
  useGetPostsQuery,
  useCreatePostMutation
} from '@redux/Store18/Slices/Slice1'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * From the store, it will pass through onQueryStarted for updating the request as soon as the query is made
 * but it will start the query after (Optimistic update)
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const [createPost, { data, isLoading: isUpdating }] = useCreatePostMutation()
  const getPost1 = useGetPostsQuery()

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

  console.log(data, getPost1)
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>
        <button onClick={() => handleClick()}>Mutate Posts</button>
      </div>
      <div>
        Number of data in 1st call :{' '}
        {getPost1.status === 'pending' ? 'Loading' : getPost1.data?.length}
      </div>
    </Profiler>
  )
}

export default Home
