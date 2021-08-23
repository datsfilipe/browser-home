import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

import Image from 'next/image';
import downArrowImg from '../../assets/down-arrow.svg';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonContainer {...props} />
  )
}
