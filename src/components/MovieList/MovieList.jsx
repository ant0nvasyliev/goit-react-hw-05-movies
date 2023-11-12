import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MoviesList,
  ListItem,
  ListImage,
  MovieListTitle,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <ListImage
              src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              width="200px"
            />
            <MovieListTitle>{movie.title}</MovieListTitle>
          </Link>
        </ListItem>
      ))}
    </MoviesList>
  );
};

export default MovieList;

