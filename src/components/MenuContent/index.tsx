import Image from 'next/image'

import React, { ChangeEvent, HTMLAttributes, useEffect, useState } from 'react'

import PopupComponent from '../Popup'
import { Scrollbars } from 'react-custom-scrollbars'

import { MenuContentContainer, Ul, Li, ButtonAdd, Input, Content } from './style'
import { useMenus } from '../../hooks/useMenus'
import { useAuth } from '../../hooks/useAuth'
import { Item } from '../../types/item'
import plus from '../../assets/plus.svg'
import trash from '../../assets/trash.svg'

export function MenuContent(props: {isMounted: boolean, props: HTMLAttributes<HTMLDivElement> }) {
  const [newMenuItemUrl, setNewMenuItemUrl] = useState('')
  const [listItems, setListItems] = useState<Item[]>([])
  const [menuIndex, setMenuIndex] = useState<number>()

  const { menus, handleRemoveMenuItem } = useMenus()
  const { user } = useAuth()

  async function handleInputChangeValue(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.trim() === '') return

    setNewMenuItemUrl(event.target.value)
  }

  useEffect(() => {
    if (!props.isMounted) return

    if (props.props.title === menus.first_menu.title) {
      if (menus.first_menu.items) {
        setListItems(Object.values(menus.first_menu.items))
        setMenuIndex(0)
      } else {
        setListItems([])
      }
    } else if (props.props.title === menus.second_menu.title) {
      if (menus.second_menu.items) {
        setListItems(Object.values(menus.second_menu.items))
        setMenuIndex(1)
      } else {
        setListItems([])
      }
    } else {
      if (menus.third_menu.items) {
        setListItems(Object.values(menus.third_menu.items))
        setMenuIndex(2)
      } else {
        setListItems([])
      }
    }
  }, [menus])

  return (
    <MenuContentContainer className={`${props.isMounted ? 'show' :  ''}`} {...props}>
      <Scrollbars
        style={{ width: 260 }}
        universal
        autoHeight
        autoHeightMin={40}
        autoHeightMax={280}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <Ul>
          <Li id="add-item">
            <Content>
              <div suppressHydrationWarning={true}>
                {process.browser &&
                  <PopupComponent emoji='📩' menuItemUrl={newMenuItemUrl} menuTitle={props.props.title} title='Salve um novo item' content='Insira um nome para o item aqui:' button={
                    <ButtonAdd disabled={!newMenuItemUrl} >
                      <div className="image">
                        <Image src={plus} alt="Adicionar item" />
                      </div>
                    </ButtonAdd>
                  } />
                }
              </div>
              <Input
                placeholder="Adicionar Link"
                onChange={handleInputChangeValue}
                value={newMenuItemUrl}
              />
            </Content>
          </Li>
          {listItems ? listItems.map(item => {
            return (
              <Li className="list-item" key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                <div className="image">
                  <button onClick={() => handleRemoveMenuItem(item.id, user.id, menuIndex)}>
                    <Image src={trash} alt="Remover item" />
                  </button>
                </div>
              </Li>
            )
          }): <></>}
        </Ul>
      </Scrollbars>
    </MenuContentContainer>
  )
}
