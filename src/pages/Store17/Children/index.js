/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler } from 'react'
import { usePrefetch } from '@redux/Store17/Slices/Slice1'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * Prefetch data on hover with an agnostic call
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const prefetchGetPosts = usePrefetch('getPosts')

  const handleHover = () => {
    console.log('Handle Hover')
    prefetchGetPosts()
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onMouseEnter={handleHover}>
        Useless Button, but prefetch on hover
      </button>
    </Profiler>
  )
}

export default Home
