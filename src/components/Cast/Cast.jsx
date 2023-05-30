import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API.jsx';
import { Image } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    async function getCast() {
      try {
        const visibleCast = await getMovieCast(movieId);
        setCast(visibleCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <Image
            src={
              profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
