import React, { useContext } from 'react';
import { useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/sidebarContext';
import {
  SidebarWrapper,
  SidebarList,
  SidebarUL
} from '../styles/SidebarStyles';
import { routes } from '../router';

export const Sidebar = () => {
  const [state] = useContext(Context);
  const { sidebar } = state;
  let checkWidth = window.innerWidth;
  const wrapperWidth = useSpring({
    width: sidebar
      ? checkWidth > 768
        ? '280px'
        : checkWidth.toString()
      : '0px'
  });
  const listVisibality = useSpring({
    visibility: sidebar ? 'visible' : 'hidden'
  });

  return (
    <SidebarWrapper style={wrapperWidth}>
      <SidebarUL>
        {routes.map(route =>
          route.state.title !== 'Author' ? (
            <NavLink key={route.state.id} to={route.pathname} exact>
              <SidebarList style={listVisibality}>
                <route.state.icon />
                {route.state.title !== 'Author' ? route.state.title : null}
              </SidebarList>
            </NavLink>
          ) : null
        )}
      </SidebarUL>
    </SidebarWrapper>
  );
};
