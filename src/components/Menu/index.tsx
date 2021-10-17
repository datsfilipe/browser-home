import Image from 'next/image'

import { useState } from 'react'
import React, { HTMLAttributes } from 'react'

import { ClickAwayListener } from '@material-ui/core'

import { MenuContent } from '../MenuContent'
import { MenuContainer, Span, Dropdown, EditButton } from './style'
import PopupComponent from '../Popup'

import dropdownImg from '../../assets/dropdown.svg'
import dropupImg from '../../assets/dropup.svg'
import editMenuImg from '../../assets/edit-icon.svg'

export function Menu(props: HTMLAttributes<HTMLDivElement>) {
  const [isMounted, setIsMounted] = useState(false)

  function handleClickAway () {
    setIsMounted(false)
  }

  function handleButtonDropdownClick () {
    if (isMounted) {
      setIsMounted(false)
    } else {
      setIsMounted(true)
    }
  }

  function handleMenuClick () {
    if (isMounted === false) {
      setIsMounted(true)
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
          { isMounted ? (
            <Image id="dropup-image" src={dropupImg} alt="Minimize Menu" width="24" height="24" />
          ) : (
            <Image id="dropdown-image" src={dropdownImg} alt="Open Menu" width="24" height="24" />
          )
          }
        </Dropdown>
        <Span>{props.title}</Span>
        <div suppressHydrationWarning={true}>
          {process.browser &&
            <PopupComponent emoji='📩' menuTitle={props.title} title='Salve um novo título' content='Insira o novo título aqui:' button={
              <EditButton >
                <Image src={editMenuImg} alt="Edit Menu" width="24" height="24" />
              </EditButton>
            } />
          }
        </div>
        <MenuContent
          isMounted={isMounted}
          props={props}
        />
      </MenuContainer>
    </ClickAwayListener>
  )
}
