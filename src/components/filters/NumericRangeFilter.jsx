import React from 'react'

const NumericRangeFilter = ({column: { setFilter, Header, classElement }}) => {
  const checkFilter = () => {
    const operator = document.querySelector(`.operator__${classElement}`).value
    const operand = document.querySelector(`.operand__${classElement}`).value
    if (operand) {
      setFilter({operator, operand})
    } else {
      setFilter(null)
    }
   };
  return (
    <li
      className="filters__option"
    >
      {Header}
      <select name="height-inf" onChange={() => checkFilter()} className={`operator__${classElement}`}>
        <option value="gt">&gt;</option>
        <option value="eq">=</option>
        <option value="lt">&lt;</option>
      </select>
      <input name="height" type="number" className={`operand__${classElement}`} onChange={() => checkFilter()} step="any" min="0" />
    </li>
  )
}

export default NumericRangeFilter
