/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

export const myContext = React.createContext();

const Provider = (props) => {
  const [disclaimerIsOpen, setDisclaimerIsOpen] = useState(true);

  return (
    <myContext.Provider value={{
      disclaimerIsOpen,
      changeDisclaimerIsOpen: () => setDisclaimerIsOpen(!disclaimerIsOpen),
    }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
