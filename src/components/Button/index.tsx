import { ButtonHTMLAttributes } from "react";
import { ButtonContainer, SearchBarButtonContainer } from "./style";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  if (props.className) return (
    <SearchBarButtonContainer {...props} />
  );
  if (!props.className) return (
      <ButtonContainer {...props} />
  );
}
