import styled from 'styled-components'

const Modal = styled.div`
  font-size: 12px;
  height: 200px;
  width: 300px;
  background-color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.border};
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 18px;
  font-family: Poppins, sans-serif;
  color: ${props => props.theme.text};
  text-align: center;
  padding: 5px;
`

const ModalContent = styled.div`
  width: 100%;
  padding: 10px 5px;
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.textSecondary};
`

const Input = styled.input`
  border: none;
  margin-top: 6px;
  max-width: 250px;
  border-radius: 8px;
  padding: 4px 8px 4px 8px;
  opacity: 0.7;

  font: 16px 'Roboto', sans-serif;
  color: #313131;

  transition: opacity 250ms;

  &:focus {
    opacity: 1;
  }
`

const ModalActions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`

const CloseButton = styled.button`
  display: none;
`

const Button = styled.button`
  border: none;
  outline: none;
  min-width: 80px;
  border-radius: 8px;
  font-family: Poppins, sans-serif;
  color: ${props => props.theme.text};
  background-color: #44475a;
  padding: 6px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  transition: background-color 300ms;
  cursor: pointer;

  &:hover {
    background-color: #41414D;
  }
`

export { Modal, Header, ModalContent, ModalActions, CloseButton, Button, Input }
