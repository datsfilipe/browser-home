import styled from 'styled-components'

const MenuContentContainer = styled.div`
  display: none;
  position: absolute;
  top: 120%;
  padding: 32px;

  background-color: ${props => props.theme.primary};

  z-index: 1;
  border-radius: 20px;

  border: 1px solid ${props => props.theme.border};
`

const Ul = styled.ul`
  width: 100%;
  height: 100%;

  margin-top: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`

const Li = styled.li`
  font: 16px 'Poppins', sans-serif;
  font-weight: 500;

  display: inline-flex;

  gap: 5px;

  &#add-item {
    padding-bottom: 12px;
  }

  &.list-item {
    padding: 5px;
    width: 90%;
    border-bottom: 1px solid ${props => props.theme.border};

    transition: all 250ms;

    &:nth-child(0) {
      border-top: 1px solid ${props => props.theme.border};
    }
    &:hover {
      cursor: pointer;
      border-color: #41414D;
    }

    .image {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 12px;

      &:hover {
        margin-top: -2px;
      }

      button {
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`

const ButtonAdd = styled.button`
  background-color: transparent;
  display: flex;

  width: 32px;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.text};
  font: 16px 'Poppins', sans-serif;
  font-weight: 500;

  ::placeholder {
    color: ${props => props.theme.text};
    opacity: 0.6;
  }
`

const Content = styled.div`
  width: 100%;
  display: inline-flex;
`

export { MenuContentContainer, Ul, Li, ButtonAdd, Input, Content }

