import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../services/API';
export default function Home() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function trendingMovies() {
      const visibleMovies = await getTrendingMovies();
      setMovies(visibleMovies.results);
    }
    trendingMovies();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
