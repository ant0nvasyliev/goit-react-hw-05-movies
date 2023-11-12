import React, { useState, useEffect } from 'react';
import { fetchMovies } from 'api';
import MovieList from '../../components/MovieList/MovieList';
import { HomeTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovies();
        const array = await data.results.map(({ id, title, poster_path }) => {
          return { id, title, poster_path };
        });
        setMovies(array);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <HomeTitle>Trending movies</HomeTitle>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
