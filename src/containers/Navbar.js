import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router';

export const Navbar = () => {
  return (
    <div>
      {routes.map(route => (
        <Link key={route.state.id} to={route.pathname}>
          {route.state.title !== 'Author' ? route.state.title : null}
        </Link>
      ))}
    </div>
  );
};
