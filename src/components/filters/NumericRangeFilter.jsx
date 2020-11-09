import React, { useState } from 'react';

const checkFilter = (operator, operand) => {
  if (operand === '') {
    return null;
  }
  return { operator, operand };
};

const NumericRangeFilter = ({ column: { filterValue, setFilter, Header } }) => {
  const [operator, setOperator] = useState(filterValue ? filterValue.operator : 'gt');
  const [operand, setOperand] = useState(filterValue ? filterValue.operand : '');
  return (
    <li
      className="filters__option"
    >
      {Header}
      <select
        onChange={(e) => {
          setOperator(e.target.value);
          setFilter(checkFilter(e.target.value, operand));
        }}
        value={operator}
      >
        <option value="gt">&gt;</option>
        <option value="eq">=</option>
        <option value="lt">&lt;</option>
      </select>
      <input
        type="number"
        onChange={(e) => {
          setOperand(e.target.value);
          setFilter(checkFilter(operator, e.target.value));
        }}
        step="any"
        min="0"
        value={filterValue ? filterValue.operand : ''}
        className="filters__input"
      />
    </li>
  );
};

export default NumericRangeFilter;
export { checkFilter };
