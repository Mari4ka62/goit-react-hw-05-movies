import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f839b78354fef4499f7468843ae5a754';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};
export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};
export const getMovieBySearch = async searchQuery => {
  const response = await axios.get(
    `/search/movie?query=${searchQuery}&language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};
