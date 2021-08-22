import styled from "styled-components";
import { MenuContentContainer } from "../MenuContent/style";

const MenuContainer = styled.div`
  margin-top: 4rem;
  height: 40px;
  border-radius: 15px;

  position: relative;
  background-color: ${props => props.theme.dark.border};

  display: flex;
  align-items: center;

  &:hover ${MenuContentContainer} {
    display: block;
  }
`;

const Span = styled.span`
  padding: 0 60px 0 60px;
  margin-left: 0;
  margin-right: auto;
  font: 18px 'Poppins', sans-serif;
  color: ${props => props.theme.dark.secondary};
`;

export {Span, MenuContainer};
