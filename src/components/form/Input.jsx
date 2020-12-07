import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, label, max, isNumeric, defaultValue, isRequired,
}) => (
  <label htmlFor={name} className="edits__row">
    { isRequired ? (
      <span className="edits__label">
        <span className="edits__asterisk">*</span>
        {` ${label}`}
      </span>
    ) : label }
    <input
      type={isNumeric ? 'number' : 'string'}
      defaultValue={defaultValue}
      min="0"
      max={max || ''}
      name={label}
      className="edits__input edits__field"
      required={isRequired}
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  isNumeric: PropTypes.bool,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
};

Input.defaultProps = {
  max: PropTypes.undefined,
  isNumeric: true,
  isRequired: false,
  defaultValue: '',
};

export default Input;
