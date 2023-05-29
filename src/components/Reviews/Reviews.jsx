import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function movieReviews() {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews.results);
    }
    movieReviews();
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}
