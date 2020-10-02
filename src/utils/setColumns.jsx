import React from 'react';
import MultiSelectColumnFilter from '../components/filters/MultiSelectColumnFilter';
import NumericRangeFilter from '../components/filters/NumericRangeFilter';

const setColumns = [{
  Header: 'Municipality',
  accessor: 'muni',
  Filter: MultiSelectColumnFilter,
  filter: 'multiple',
  searchText: 'Type here to search filters by town/city',
  emptyFilterText: 'No towns/cities selected',
  panel: 'muni',
}, {
  Header: 'Zone Use Type',
  accessor: 'zoUsety',
  panel: 'function',
  Filter: MultiSelectColumnFilter,
  filter: 'multiple',
  searchText: 'Type here to search filters by zone use',
}, {
  Header: 'Multifamily',
  accessor: 'multifam',
  panel: 'multifam',
  Filter: MultiSelectColumnFilter,
  filter: 'multiple',
  searchText: 'Type here to search filters multifamily housing zoning',
}, {
  Header: 'Minimum Lot Size (sf)',
  accessor: 'minlotsize',
  classElement: 'minlotsize',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Percent Lot Coverage (%)',
  accessor: 'pctlotcov',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Percent Lot Coverage, Effective (%)',
  accessor: 'plcEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Minimum Lot Area per Dwelling Unit (sf)',
  accessor: 'lApDu',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Maximum Swelling Units per Acre (#)',
  accessor: 'dUpAc',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Floor-Area Ratio',
  accessor: 'far',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Zoning Name',
  accessor: 'zoName',
  Filter: MultiSelectColumnFilter,
  filter: 'inclusiveOr',
  searchText: 'Type here to search filters by zoning name',
  emptyFilterText: 'No zoning names selected',
  Cell: ({ value, row }) => value.map((item, i) => <span className="cell__item" key={`${value}-${row.index}-${i}`}>{item}</span>),
  panel: 'zoName',
}, {
  Header: 'Effective Max Height',
  accessor: 'mxhtEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}, {
  Header: 'Effective Max Floors',
  accessor: 'mxflEff',
  classElement: 'mxfl',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'keyInfo',
}];

export default setColumns;
