import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export const myContext = React.createContext();

const Provider = (props) => {
  const [welcomeIsOpen, setWelcomeIsOpen] = useState(true);
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  return (
    <myContext.Provider
      value={{
        welcomeIsOpen,
        changeWelcomeIsOpen: () => setWelcomeIsOpen(!welcomeIsOpen),
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
