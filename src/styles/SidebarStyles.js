import styled from 'styled-components';
import { animated } from 'react-spring';

export const SidebarWrapper = styled(animated.div)`
  height: 20vh;
  position: sticky;
  top: 14vh;
  left: 0;
  z-index: 100;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0s linear 0s;
  transform: translateX(0);
  visibility: ${props => props.visibility || 'hidden'};
  width: 280px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.28);
`;
