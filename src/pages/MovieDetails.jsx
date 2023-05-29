import { useState, useEffect, Suspense, useRef } from 'react';
import { getMovieDetails } from '../services/API';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  const { title, vote_average, overview, poster_path } = movie;
  useEffect(() => {
    async function getMovie() {
      try {
        const visibleMovie = await getMovieDetails(movieId);
        setMovie(visibleMovie);
        setGenres(visibleMovie.genres.map(genre => genre.name).join(' '));
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <NavLink to={backLinkLocation.current}>Go back</NavLink>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      ></img>
      <h2>{title}</h2>
      <p>User score:{vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
