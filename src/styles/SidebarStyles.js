import styled from 'styled-components';
import { animated } from 'react-spring';

export const SidebarWrapper = styled(animated.div)`
  height: 212px;
  position: sticky;
  top: 90px;
  left: 0;
  z-index: 100;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0s linear 0s;
  transform: translateX(0);
  width: 0px;
`;

export const SidebarUL = styled.ul`
  a {
    text-decoration: none;
  }

  a.active li {
    font-weight: 500;
    background: rgba(66, 133, 244, 0.149);
    border-radius: 0px 25px 25px 0px;
    color: #1967d2;
  }
`;

export const SidebarList = styled(animated.li)`
  font-size: 1.2rem;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  padding: 10px;
  text-align: center;
  background-color: #fafafe;
  color: black;
  color: black;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: #1967d2;
  }
`;
