import { MenuContentContainer, Ul, Li, ButtonAdd } from './style';

import Image from 'next/image';
import addNewImg from '../../assets/plus.svg';
import { HTMLAttributes } from 'react';

export function MenuContent(state: {state: boolean}, props: HTMLAttributes<HTMLDivElement>) {
  function handleClickButtonAdd() {
  }

  return (
    <MenuContentContainer className={`${state.state ? 'show' : ''}`} {...props}>
      <Ul>
        <Li>
          <ButtonAdd onClick={handleClickButtonAdd} type="button">
            <div className="image">
              <Image src={addNewImg} alt="Adicionar item" />
            </div>
          </ButtonAdd>
          Adicionar link
        </Li>
        <Li></Li>
        <Li></Li>
      </Ul>
    </MenuContentContainer>
  )
}
