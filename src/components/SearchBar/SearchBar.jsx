import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './Searchbar.styled';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ searchMovies }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(inputValue.toLowerCase());
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchButton>
        <BsSearch />
        <SearchSpan>Search</SearchSpan>
      </SearchButton>
      <SearchInput
        name="searchName"
        type="text"
        autoFocus
        id="search"
        value={inputValue}
        onChange={handleChange}
      ></SearchInput>
    </SearchForm>
  );
};

export default SearchBar;
