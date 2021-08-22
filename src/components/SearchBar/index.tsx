import { SearchBarContainer, Input } from './style';
import { Button } from '../Button/index';

export function SearchBar() {
  return (
    <>
      <SearchBarContainer>
        <Button className="search-icon" type="button"></Button>
        <Input type="text" />
      </SearchBarContainer>
    </>
  )
}
