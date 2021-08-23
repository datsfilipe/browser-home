import { useState } from "react";
import { MenuContent } from "../MenuContent/index";
import { MenuContainer, Span } from './style';
import React, { HTMLAttributes } from "react";
import { ClickAwayListener } from '@material-ui/core';

export function Menu(props: HTMLAttributes<HTMLDivElement>) {
  const [state, setState] = useState(false);

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
        <MenuContent state={state} />
      </MenuContainer>
    </ClickAwayListener>
  )
}
