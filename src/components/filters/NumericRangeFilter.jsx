import React, { useState } from 'react';

const checkFilter = (operator, operand) => {
  if (operand !== '') {
    return { operator, operand };
  }
  return null;
};

const NumericRangeFilter = ({ column: { setFilter, Header } }) => {
  const [operator, setOperator] = useState('gt');
  const [operand, setOperand] = useState('');
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
      />
    </li>
  );
};

export default NumericRangeFilter;
export { checkFilter };
