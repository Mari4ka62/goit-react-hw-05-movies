import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../services/API';
import { Box, Title, Item } from './Pages.styled';

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
    <Box>
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <NavLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </Item>
        ))}
      </ul>
    </Box>
  );
}
