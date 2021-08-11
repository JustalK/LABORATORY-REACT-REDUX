/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler } from 'react'
import { useGetPokemonByNameQuery } from '@redux/Store12/Slices/Slice1'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      {data.name}
    </Profiler>
  )
}

export default Home
