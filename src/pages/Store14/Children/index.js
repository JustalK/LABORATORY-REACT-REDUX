/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler } from 'react'
import { useCreatePostMutation } from '@redux/Store14/Slices/Slice1'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const [createPost, { data, isLoading: isUpdating }] = useCreatePostMutation()

  if (isUpdating) {
    return <div>Loading</div>
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

  console.log(data)
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>Create Post</button>
      <div>Data: {data && data.id}</div>
    </Profiler>
  )
}

export default Home
