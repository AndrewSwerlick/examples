import { useState, useCallback } from 'react'

export default function Home({ book }) {
  const [reviews, setReviews] = useState(null)

  const handleGetReviews = useCallback(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then(setReviews)
  }, [])

  return (
    <section>
      <img src={book.imageUrl} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Get Reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://my.backend/book')
  const book = await res.json()

  return {
    props: {
      book,
    },
  }
}