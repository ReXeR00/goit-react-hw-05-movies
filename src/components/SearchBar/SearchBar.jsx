import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './Searchbar.styled';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onsubmit(inputValue);
    setInputValue('');
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
        id="search"
        value={inputValue}
        onSubmit={handleChange}
      ></SearchInput>
    </SearchForm>
  );
};

export default SearchBar;
