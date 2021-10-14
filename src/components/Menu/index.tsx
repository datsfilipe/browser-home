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

  function handleButtonDropdownClick () {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  }

  function handleMenuClick () {
    if (state === false) {
      setState(true)
    }
  }

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <MenuContainer onClick={handleMenuClick} >
        <Dropdown onClick={handleButtonDropdownClick} >
          { state ? (
              <Image id="dropup-image" src={dropupImg} alt="Minimize Menu" width="24" height="24" />
            ) : (
              <Image id="dropdown-image" src={dropdownImg} alt="Open Menu" width="24" height="24" />
            )
          }
        </Dropdown>
        <Span>{props.title}</Span>
        <MenuContent
          data={data}
        />
      </MenuContainer>
    </ClickAwayListener>
  )
}
