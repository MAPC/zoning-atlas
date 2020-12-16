import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import triangle from '../../images/triangleDownGreen.svg';

const TableOfContents = ({ items }) => {
  const tocItems = items.reduce((array, item) => {
    if (item.frontmatter.toc) {
      const url = `/reports/1/#${item.frontmatter.section}`;
      array.push((
        <li className="report__list-item" key={item.frontmatter.section}>
          <img src={triangle} className="report__triangle" />
          <hr className="report__line" />
          <AnchorLink to={url} className="report__link">
            {item.frontmatter.title}
          </AnchorLink>
        </li>
      ));
    }
    return array;
  }, []);

  return (
    <ul className="report__list">
      <li className="report__list-item" key="empty-item">
        <img src={triangle} className="report__triangle" />
      </li>
      {tocItems}
    </ul>
  );
};

export default TableOfContents;
