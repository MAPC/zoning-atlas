import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ name, label, defaultValue }) => (
  <label htmlFor={name} className="edits__row edits__row--multi-line">
    {label}
    <textarea name={name} className="edits__textarea edits__field" defaultValue={defaultValue} />
  </label>
);

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

Textarea.defaultProps = {
  name: '',
  defaultValue: '',
};

export default Textarea;
