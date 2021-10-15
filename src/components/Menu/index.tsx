import Image from 'next/image';

import { useState } from "react";
import React, { HTMLAttributes } from "react";

import { ClickAwayListener } from '@material-ui/core';

import { MenuContent } from "../MenuContent";
import { MenuContainer, Span, Dropdown, EditButton } from './style';
import PopupComponent from '../Popup';
import { useMenus } from '../../hooks/useMenus';

import dropdownImg from '../../assets/dropdown.svg';
import dropupImg from '../../assets/dropup.svg';
import editMenuImg from '../../assets/edit-icon.svg';

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
        <div suppressHydrationWarning={true}>
          {process.browser &&
            <PopupComponent menuTitle={props.title} title='save item' content='just put info there' button={
              <EditButton >
                <Image src={editMenuImg} alt="Edit Menu" width="24" height="24" />
              </EditButton>
            } />
          }
        </div>
        <MenuContent
          data={data}
        />
      </MenuContainer>
    </ClickAwayListener>
  )
}
