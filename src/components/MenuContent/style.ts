import styled from "styled-components";

const MenuContentContainer = styled.div`
  width: 100%;
  margin-top: 140px;

  display: none;
  position: absolute;

  background-color: ${props => props.theme.dark.primary};

  z-index: 1;
  border: none;
  border-radius: 20px;

  box-shadow: 2px 2px 1px 2px rgba(65, 65, 77, 0.2);
`;

const Ul = styled.ul`
  padding: 32px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

const Li = styled.li`
  color: ${props => props.theme.dark.text};
  font: 16px 'Poppins', sans-serif;
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 5px;
`;

const ButtonAdd = styled.button`
  background-color: transparent;
  display: flex;

  width: 32px;
  border-radius: 15px;
  border: none;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.dark.text};
  font: 16px 'Poppins', sans-serif;
  font-weight: 500;
`;

const Form = styled.form`
  width: 100%;
  display: inline-flex;
`;

export { MenuContentContainer, Ul, Li, ButtonAdd, Input, Form };
