import styled from "styled-components";

const MenuContentContainer = styled.div`
  width: 100%;
  margin-top: 120px;

  display: none;
  position: absolute;

  background-color: ${props => props.theme.dark.border};

  z-index: 1;
  border: none;
  border-radius: 20px;
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

`;

export { MenuContentContainer, Ul };
