import Image from 'next/image';

import { useState } from "react";
import React, { HTMLAttributes } from "react";

import { ClickAwayListener } from '@material-ui/core';

import { MenuContent } from "../MenuContent/index";
import { MenuContainer, Span, Dropdown } from './style';
import dropdownImg from '../../assets/dropdown.svg';
import dropupImg from '../../assets/dropup.svg';

export function Menu(props: HTMLAttributes<HTMLDivElement>) {
  const [state, setState] = useState(false);
  const data = {state, props}

  function handleClickAway () {
    setState(false);
  }

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <MenuContainer onClick={()=>setState(true)} >
        <Span>{props.title}</Span>
        <MenuContent
          data={data}
        />
      </MenuContainer>
    </ClickAwayListener>
  )
}
