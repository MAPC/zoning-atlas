import React from 'react';

const Category = ({ title, sectionOption, setSection}) => (
  <li>
    <div
      role="button"
      tabIndex={0}
      onClick={() => setSection(sectionOption)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setSection(sectionOption);
        }
      }}
    >
      { title }
    </div>
  </li>
);

export default Category;
