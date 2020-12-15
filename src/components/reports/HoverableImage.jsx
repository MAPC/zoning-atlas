import React from 'react';
import PropTypes from 'prop-types';
import triangleDownWhite from '../../images/triangleDownWhite.svg';

const HoverableImage = ({
  image, title, height, width, caption, subtitle, size,
}) => (
  <>
    <div className="hoverable-image__wrapper" style={{ height, width }}>
      <img src={image} className="hoverable-image__image" alt={`${title} cover`} />
      <div className={`hoverable-image__overlay hoverable-image__overlay--${size}`}>
        <img src={triangleDownWhite} alt="Decorative triangle" className={`hoverable-image__triangle hoverable-image__triangle--${size}`} />
        <p className="hoverable-image__title">{ title }</p>
        { subtitle ? <p className="hoverable-image__title">{ subtitle }</p> : '' }
      </div>
    </div>
    { caption ? <p className="hoverable-image__caption">{caption}</p> : '' }
  </>
);

HoverableImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  caption: PropTypes.string,
  subtitle: PropTypes.string,
};

HoverableImage.defaultProps = {
  caption: '',
  size: 'small',
  subtitle: '',
};
export default HoverableImage;
