import styled from "styled-components";

const MenuContentContainer = styled.div`
  width: 100%;
  margin-top: 170px;

  display: none;
  position: absolute;

  background-color: ${props => props.theme.dark.border};

  z-index: 1;
  border: none;
  border-radius: 15px;
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

export { MenuContentContainer, Ul };
