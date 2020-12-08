/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export const myContext = React.createContext();

const Provider = (props) => {
  const [disclaimerIsOpen, setDisclaimerIsOpen] = useState(true);
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

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
