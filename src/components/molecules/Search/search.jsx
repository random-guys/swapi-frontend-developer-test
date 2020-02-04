import React from 'react';
import Button from '../../atoms/Button/button';
import Input from '../../atoms/Input/input';
import { searchPlaceholder, searchIcon } from '../../../utils/strings';

const Search = () => (
  <form className="search">
    <Button className="search__btn">
      <img src={searchIcon} alt="search" />
    </Button>
    <Input
      type="text"
      className="search__input"
      name="search"
      placeholder={searchPlaceholder}
      onChange={() => {}}
    />
  </form>
);

export default Search;
