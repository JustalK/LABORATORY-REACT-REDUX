/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bookAdded } from '@redux/Store10/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  console.log(books)
  return (
    <div>
      <button onClick={() => dispatch(bookAdded({ id: 'a', title: 'First' }))}>
        Add book A
      </button>
      <button onClick={() => dispatch(bookAdded({ id: 'b', title: 'Second' }))}>
        Add book B
      </button>
      <button
        onClick={() =>
          dispatch(
            bookAdded({
              id: (Math.random() + 1).toString(36).substring(7),
              title: (Math.random() + 1).toString(36).substring(7),
              whatever: 'Hey'
            })
          )
        }
      >
        Add book Random
      </button>
      <div>Books</div>
      {books.ids.map((key) => {
        return <div key={key}>{books.entities[key].title}</div>
      })}
    </div>
  )
}

export default Home
