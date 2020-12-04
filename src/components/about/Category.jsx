import React from 'react';

const Category = ({
  title, sectionOption, currentSection, setSection,
}) => (
  <li className={sectionOption === currentSection ? 'about__category about__category--active' : 'about__category'}>
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
