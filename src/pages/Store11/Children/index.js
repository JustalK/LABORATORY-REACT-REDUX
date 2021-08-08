/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  bookRemove,
  bookAdded,
  bookUpdated
} from '@redux/Store11/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const books = useSelector((state) => state.books)
  const booksSelector = useSelector(() => books.entities.a)
  const dispatch = useDispatch()

  console.log(booksSelector)
  console.log(books)
  return (
    <div>
      <button
        onClick={() =>
          dispatch(bookAdded({ id: 'a', bookId: 'a', title: 'First' }))
        }
      >
        Add book A
      </button>
      <button
        onClick={() =>
          dispatch(
            bookUpdated({ id: 'a', changes: { title: 'First Updated' } })
          )
        }
      >
        Updating book A
      </button>
      <button onClick={() => dispatch(bookRemove('a'))}>Remove book A</button>
      <div>Books</div>
      {books.ids.map((key) => {
        return <div key={key}>{books.entities[key].title}</div>
      })}
    </div>
  )
}

export default Home
