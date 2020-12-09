import React from 'react';
import { Link } from 'gatsby';
import triangleDownWhite from '../../images/triangleDownWhite.svg';

const LinkContent = ({ image, title }) => (
  <div className="report-link__wrapper">
    <img src={image} className="report-link__image" />
    <div className="report-link__hover-content">
      <img src={triangleDownWhite} alt="Decorative triangle" />
      <h3 className="report-link__title">{ title }</h3>
    </div>
  </div>
);

const ReportLink = ({
  image, title, url, internal,
}) => {
  if (internal) {
    return (
      <Link to={url}>
        <LinkContent image={image} title={title} />
      </Link>
    );
  }
  return (
    <a href={url}>
      <LinkContent image={image} title={title} />
    </a>
  )
};

export default ReportLink;
