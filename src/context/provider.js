import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export const myContext = React.createContext();

const Provider = (props) => {
  const [welcomeIsOpen, setWelcomeIsOpen] = useState(true);

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

ReactModal.setAppElement("#___gatsby");

export default ({ element }) => <Provider>{element}</Provider>;
