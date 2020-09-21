import React from 'react'
import NumericRangeFilter from './NumericRangeFilter'

const KeyInfoPanel = ( {columns} ) => {
  return (
    <div className="filters">
      <ul className="filters__list">
        <NumericRangeFilter column={columns[0]} />
        <NumericRangeFilter column={columns[1]} />
      </ul>
    </div>
  )
}

export default KeyInfoPanel