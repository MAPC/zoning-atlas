import React from 'react'
import MultiSelectColumnFilter from './MultiSelectColumnFilter'

const ZoneFunctionPanel = ({columns}) => {
  console.log(columns)
  return (
    <div className="filters">
      <ul className="filters__list">
        <MultiSelectColumnFilter column={columns[1]} />
        {/* <NumericRangeFilter column={columns[0]} />
        <NumericRangeFilter column={columns[1]} /> */}
      </ul>
    </div>
  )
}

export default ZoneFunctionPanel;