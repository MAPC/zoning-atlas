import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = ({
  name, label, defaultValue, options, setFormValues, formValues,
}) => (
  <label htmlFor={name} className="edits__row">
    {label}
    <select
      name={name}
      className="edits__select edits__field"
      defaultValue={defaultValue}
      onChange={(e) => {
        const tempState = formValues;
        tempState[name] = e.target.value;
        setFormValues(tempState);
      }}
    >
      {Object.entries(options).map((row) => <option value={row[1]} key={row[1]}>{row[0]}</option>)}
    </select>
  </label>
);

DropdownMenu.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.number,
  options: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

DropdownMenu.defaultProps = {
  defaultValue: '',
};

export default DropdownMenu;
