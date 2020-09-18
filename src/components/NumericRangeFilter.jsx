import React from 'react'

const NumericRangeFilter = ({column: { setFilter }}) => {
  const checkFilter = () => {
   const operator = document.querySelector('.operator__mxht').value
   const operand = document.querySelector('.operand__mxht').value
   if (operand) {
     setFilter({operator, operand})
   } else {
     setFilter(null)
   }
  };

  return (
    <div className="filters">
      <ul className="filters__list">
        <li
          className="filters__option"
        >
          Max Height
          <select name="height-inf" onChange={() => checkFilter()} className='operator__mxht'>
            <option value="gt">&gt;</option>
            <option value="eq">=</option>
            <option value="lt">&lt;</option>
          </select>
          <input name="height" type="number" className="operand__mxht" onChange={() => checkFilter()} />
        </li>
      </ul>
    </div>
  )
}

export default NumericRangeFilter