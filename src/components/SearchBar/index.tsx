import { SearchBarContainer, Input } from './style';
import { Button } from '../Button/index';
import { ChangeEvent, useState } from 'react';

export function SearchBar() {
  const [search, setSearch] = useState('');

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(search);
  }

  return (
    <>
      <SearchBarContainer>
        <Button className="search-icon" type="button" ></Button>
        <Input
          type="text"
          value={search}
          onChange={handleInputChange}
        />
      </SearchBarContainer>
    </>
  )
}
