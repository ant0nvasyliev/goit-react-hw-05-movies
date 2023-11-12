// Movies.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovieByQuery } from 'api';
import toast from 'react-hot-toast';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');

  const onSubmitHandle = event => {
    event.preventDefault();
    const newQuery = event.target.elements.search.value;
    setQuery(newQuery);

    if (newQuery === '') {
      return toast.error('Пусте поле пошуку');
    }
    setSearchParams({ search: newQuery });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovieByQuery = async () => {
      try {
        const data = await fetchMovieByQuery(query);
        data.results.length !== 0 && setMovies(data.results);
        toast.success(`Знайшлося ${data.results.length} фільмів`);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByQuery();
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={onSubmitHandle} query={query} />
      {movies.length !== 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
