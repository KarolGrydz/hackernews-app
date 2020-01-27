import React, { useState } from 'react';

export const Sidebar = () => {
  const [show, setShow] = useState(false);
  return show ? (
    <div>
      <h1>Sidebar</h1>
      <ul>
        <li>News</li>
        <li>Top</li>
        <li>Best</li>
        <li>Jobs</li>
        <li>Favorite</li>
      </ul>
    </div>
  ) : null;
};
