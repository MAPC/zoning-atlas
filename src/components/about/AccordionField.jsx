import React, { useState } from 'react';
import metrocommonTriangle from '../../images/metrocommonTriangle.svg';

function toggleVisibility(currentState, setActive) {
  if (currentState === true) {
    return setActive(false);
  }
  return setActive(true);
}

const AccordionField = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div>
      <header className="accordion__header">
        <h3 className="about__subtitle">{ title }</h3>
        <button
          type="button"
          onClick={() => toggleVisibility(isActive, setActive)}
          className="accordion__button"
        >
          <img
            src={metrocommonTriangle}
            alt="Decorative triangle"
            className={ isActive ? 'accordion__icon accordion__icon--active' : 'accordion__icon' }
          />
        </button>
      </header>
      { isActive ? content : '' }
      <hr className="accordion__divider" />
    </div>
  );
};

export default AccordionField;
