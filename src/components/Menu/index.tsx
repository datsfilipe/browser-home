import { MenuContent } from "../MenuContent/index";
import { MenuContainer, Span } from './style';
import { HTMLAttributes } from "react";

export function Menu(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <MenuContainer>
      <Span>{props.title}</Span>
      <MenuContent />
    </MenuContainer>
  )
}
