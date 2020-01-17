import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router';

export const Navbar = () => {
  return (
    <div>
      {routes.map(route => (
        <Link key={route.state.id} to={route}>
          {route.state.title}
        </Link>
      ))}
      <Link to='/'>Home</Link>
      <Link to={{ pathname: `/news`, state: { title: 'News' } }}>News</Link>
    </div>
  );
};
