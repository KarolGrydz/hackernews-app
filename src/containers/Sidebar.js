import React, { useContext } from 'react';
import { Context } from '../context/sidebarContext';
import { SidebarWrapper } from '../styles/SidebarStyles';
import { useSpring } from 'react-spring';

export const Sidebar = () => {
  const [state] = useContext(Context);
  const { sidebar } = state;
  const props = useSpring({ opacity: 0, from: { opacity: 1 } });
  return (
    <SidebarWrapper visibility={sidebar} style={props}>
      <ul>
        <li>News</li>
        <li>Top</li>
        <li>Best</li>
        <li>Jobs</li>
        <li>Favorite</li>
      </ul>
    </SidebarWrapper>
  );
};
