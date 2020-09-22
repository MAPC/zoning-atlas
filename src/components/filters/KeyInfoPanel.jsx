import React from 'react'
import NumericRangeFilter from './NumericRangeFilter'

const KeyInfoPanel = ( {columns} ) => {
  return (
    <div className="filters">
      <ul className="filters__list">
        <NumericRangeFilter column={columns[0]} />
        <NumericRangeFilter column={columns[1]} />
        <NumericRangeFilter column={columns[2]} />
        <NumericRangeFilter column={columns[3]} />
        <NumericRangeFilter column={columns[4]} />
        <NumericRangeFilter column={columns[5]} />
        <NumericRangeFilter column={columns[6]} />
        <NumericRangeFilter column={columns[7]} />
      </ul>
    </div>
  )
}

export default KeyInfoPanel