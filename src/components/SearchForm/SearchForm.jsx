// SearchForm.jsx
import React from 'react';
import { MovieForm } from './SearchForm.styled';
;

const SearchForm = ({ onSubmit, query }) => {
  return (
    <MovieForm onSubmit={onSubmit}>
      <input type="text" name="search" defaultValue={query} />
      <button>Пошук</button>
    </MovieForm>
  );
};

export default SearchForm;
