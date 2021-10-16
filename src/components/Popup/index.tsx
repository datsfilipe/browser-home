import React, { ChangeEvent, useEffect, useState } from 'react';

import Popup from 'reactjs-popup';
import { v4 as uuid} from 'uuid';

import { CloseButton, Header, ModalActions, ModalContent, Modal, Button, Input } from './style';
import { useMenus } from '../../hooks/useMenus';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';

export function PopupComponent (props: {
  title: string;
  emoji?: string;
  content: string;
  button: JSX.Element;
  menuTitle: string | undefined;
  menuItemUrl?: string;
}) {
  const { user } = useAuth()
  const { menus, handleUpdateMenuTitle, handleAddMenuItem } = useMenus()
  const { notify } = useToast()

  const [newValue, setNewValue] = useState('');
  const [menuIndex, setMenuIndex] = useState<number>(0);

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    setNewValue(event.target.value);
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
    if (newValue.length > 10) {
      notify('WARNING: just accept values with less than 10 characters.', '⚠️')
      return;
    }
    try {
      handleUpdateMenuTitle(user.id, menuIndex, newValue);
      setNewValue('')
    } catch (err) {
      console.error(err);
    }
  }

  function handleSaveItem () {
    if (!props.menuItemUrl) return;

    try {
      const item = {
        id: uuid(),
        name: newValue,
        url: props.menuItemUrl
      }
      handleAddMenuItem(user.id, menuIndex, item)
      setNewValue('')
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
        <Modal>
          <CloseButton onClick={close}>
            &times;
          </CloseButton>
          <Header> {props.title   + ' ' + props.emoji} </Header>
          <ModalContent>
            {' '}
            {props.content}
          </ModalContent>
          <Input
            type="text"
            value={newValue}
            onChange={handleInputChange}
          />
          <ModalActions>
            <Button onClick={ () => {
              props.menuItemUrl ? handleSaveItem() : handleSaveTitle()
              close();
            }
            }>Salvar</Button>
            <Button
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
