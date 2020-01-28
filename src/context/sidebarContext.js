import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextControler = ({ children }) => {
  const initialState = {
    sidebar: 'visible'
  };

  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
