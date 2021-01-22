import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  name, label, defaultValue, setFormValues, formValues,
}) => (
  <label htmlFor={name} className="edits__row edits__row--multi-line">
    {label}
    <textarea
      name={name}
      className="edits__textarea edits__field"
      defaultValue={defaultValue}
      onChange={(e) => {
        const tempState = formValues;
        tempState[name] = e.target.value;
        setFormValues(tempState);
      }}
    />
  </label>
);

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  setFormValues: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

Textarea.defaultProps = {
  name: '',
  defaultValue: '',
};

export default Textarea;
