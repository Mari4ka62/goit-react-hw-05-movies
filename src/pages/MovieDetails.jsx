import { useState, useEffect, Suspense, useRef } from 'react';
import { getMovieDetails } from '../services/API';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import {
  ButtonBack,
  Container,
  Image,
  MovieInfo,
  AdditionalList,
  Title,
  Item,
  StyledLink,
} from './Pages.styled';

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
      <ButtonBack>
        <StyledLink to={backLinkLocation.current}>Go back</StyledLink>
      </ButtonBack>
      <Container>
        <Image
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        ></Image>
        <MovieInfo>
          <Title>{title}</Title>
          <p>User score:{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </MovieInfo>
      </Container>
      <div>
        <h3>Additional information</h3>
        <AdditionalList>
          <Item>
            <NavLink to="cast">Cast</NavLink>
          </Item>
          <Item>
            <NavLink to="reviews">Reviews</NavLink>
          </Item>
        </AdditionalList>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
