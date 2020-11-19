import React from 'react';
import NumericRangeFilter from './NumericRangeFilter';

const LotDetailsPanel = ({ columns }) => (
  <ul className="filters__list">
    <NumericRangeFilter column={columns[0]} />
    <NumericRangeFilter column={columns[1]} />
    <NumericRangeFilter column={columns[2]} />
  </ul>
);

export default LotDetailsPanel;
