import React, { ChangeEvent, useEffect, useState } from 'react';

import Popup from 'reactjs-popup';

import { CloseButton, Header, ModalActions, ModalContent, Modal, Button, Input } from './style';
import { useMenus } from '../../hooks/useMenus';
import { useAuth } from '../../hooks/useAuth';

export function PopupComponent (props: {
  title: string;
  content: string;
  button: JSX.Element;
  menuTitle: string | undefined;
}) {
  const [newTitle, setNewTitle] = useState('');
  const [menuIndex, setMenuIndex] = useState<number>(0);
  const { user } = useAuth()
  const { menus, handleUpdateMenuTitle } = useMenus()

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    setNewTitle(event.target.value);
  }

  useEffect(() => {
    if (props.menuTitle === menus.first_menu.title) {
      setMenuIndex(0);
    } else if (props.menuTitle === menus.second_menu.title) {
      setMenuIndex(1);
    } else {
      setMenuIndex(2);
    }
  }, [menuIndex, menus.first_menu.title, menus.second_menu.title, props.menuTitle])

  function handleSaveTitle () {
    if (newTitle.length > 10) {
      console.log('WARNING: just accept values with less than 10 characters.')
      return;
    }
    try {
      handleUpdateMenuTitle(user.id, menuIndex, newTitle);
      setNewTitle('')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Popup
      trigger={props.button}
      modal
      nested
    >
      {(close: any) => (
        <Modal className="modal">
          <CloseButton className="close" onClick={close}>
            &times;
          </CloseButton>
          <Header className="header"> {props.title} </Header>
          <ModalContent className="content">
            {' '}
            {props.content}
          </ModalContent>
          <Input
            type="text"
            value={newTitle}
            onChange={handleInputChange}
          />
          <ModalActions className="actions">
            <Button onClick={ () => {
              handleSaveTitle();
              close();
            }
            }>Salvar</Button>
            <Button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Cancelar
            </Button>
          </ModalActions>
        </Modal>
      )}
    </Popup>
  );
};

export default PopupComponent;
