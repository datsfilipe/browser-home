import { MenuContentContainer, Ul, Li, ButtonAdd, Input, Form } from './style';
import Image from 'next/image';
import plus from '../../assets/plus.svg';
import { FormEvent, HTMLAttributes, useState } from 'react';

type Data = {
  data: {
    isMounted: boolean,
    state: boolean,
    props: HTMLAttributes<HTMLDivElement>
  }
}

export function MenuContent(data: Data, props:  HTMLAttributes<HTMLDivElement>) {
  const [newItem, setNewItem] = useState('');

  async function handleClickButtonAdd(event: FormEvent) {
    event.preventDefault();

    if (newItem.trim() === '') return;
    if (data.data.props.title?.trim() === undefined) return;

    setNewItem('')
  }

  return (
    <MenuContentContainer className={`${data.data.state ? 'show' : ''}`} {...props}>
      <Ul>
        <Li>
          <Form>
            <ButtonAdd type="submit" onClick={handleClickButtonAdd}>
              <div className="image">
                <Image src={plus} alt="Adicionar item" />
              </div>
            </ButtonAdd>
            <Input
              placeholder="Adicionar Link"
              onChange={event => setNewItem(event.target.value)}
              value={newItem}
            />
          </Form>
        </Li>
        {/* {list.map( (item: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Li>{item}</Li>
          );
        } )} */}
      </Ul>
    </MenuContentContainer>
  )
}
