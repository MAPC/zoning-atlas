import React, { useState } from 'react';
import metrocommonTriangle from '../../images/metrocommonTriangle.svg';

function toggleVisibility(currentState, setActive) {
  if (currentState === true) {
    return setActive(false);
  }
  return setActive(true);
}

const AccordionField = ({ title, children }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div>
      <header
        className="accordion__header"
        onClick={() => toggleVisibility(isActive, setActive)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleVisibility(isActive, setActive);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <h3 className="about__subtitle accordion__title">{ title }</h3>
        <img
          src={metrocommonTriangle}
          alt="Decorative triangle"
          className={isActive ? 'accordion__icon accordion__icon--active' : 'accordion__icon'}
        />
      </header>
      {isActive ? <div className="accordion__content">{children}</div> : ''}
      <hr className="accordion__divider" />
    </div>
  );
};

export default AccordionField;
