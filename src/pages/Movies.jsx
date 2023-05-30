import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, NavLink } from 'react-router-dom';
import { getMovieBySearch } from 'services/API';
import { Input, Item } from './Pages.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const location = useLocation();

  const handleChange = e => {
    setQuery(e.target.value);
    setMovies([]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.searchQuery.value.trim()) {
      setSearchParams({ query: e.target.searchQuery.value.trim() });
    }
  };
  useEffect(() => {
    async function moviesBySearch() {
      const visibleMovies = await getMovieBySearch(searchQuery);
      setMovies(visibleMovies.results);
    }
    if (searchQuery) {
      moviesBySearch();
    }
  }, [searchQuery]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="searchQuery"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <NavLink to={`${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </Item>
        ))}
      </ul>
    </>
  );
}
