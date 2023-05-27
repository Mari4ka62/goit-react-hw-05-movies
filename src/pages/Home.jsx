import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrendingMovies } from '../services/API';
export default function Home() {
  const [movies, setMovies] = useState([]);

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
            <NavLink to={`movies/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
