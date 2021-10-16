import { MenuContentContainer, Ul, Li, ButtonAdd, Input, Content } from './style';
import Image from 'next/image';
import plus from '../../assets/plus.svg';
import { ChangeEvent, HTMLAttributes, useEffect, useState } from 'react';
import PopupComponent from '../Popup';

export function MenuContent(props: {isMounted: boolean, state: boolean, props: HTMLAttributes<HTMLDivElement> }) {
  const [newMenuItemUrl, setNewMenuItemUrl] = useState('')
  const [listItems, setListItems] = useState<Item[]>([])
  const { menus } = useMenus()

  async function handleInputChangeValue(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.trim() === '') return;

    setNewMenuItemUrl(event.target.value)
  }

  return (
    <MenuContentContainer className={`${data.data.state ? 'show' : ''}`} {...props}>
      <Ul>
        <Li>
          <Content>
            <div suppressHydrationWarning={true}>
              {process.browser &&
                <PopupComponent emoji='📩' menuItemUrl={newMenuItemUrl} menuTitle={data.data.props.title} title='Salve um novo item' content='Insira um nome para o item aqui:' button={
                  <ButtonAdd disabled={!newMenuItemUrl} onClick={() => setNewMenuItemUrl('')}>
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
        {() => {
          return (
            <Li></Li>
          )
        }}
      </Ul>
    </MenuContentContainer>
  )
}
