import { MenuContent } from "../MenuContent/index";
import { MenuContainer, Span } from './style';
import { Button } from '../Button/index';

export function Menu() {
  return (
    <MenuContainer>
      <Button type="button"></Button>
      <Span>Social</Span>
      <MenuContent />
    </MenuContainer>
  )
}
