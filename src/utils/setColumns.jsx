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
  searchText: 'Type here to search filters by zone use type',
  emptyFilterText: 'No zone use type selected',
}, {
  Header: 'Multifamily Housing',
  accessor: 'multifam',
  panel: 'multifam',
  Filter: MultiSelectColumnFilter,
  filter: 'multiple',
  searchText: 'Type here to search filters multifamily housing zoning',
  emptyFilterText: 'No multifamily housing zoning options selected',
}, {
  Header: 'Minimum Lot Size (sf)',
  accessor: 'minlotsize',
  classElement: 'minlotsize',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Percent Lot Coverage (%)',
  accessor: 'pctlotcov',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Percent Lot Coverage, Effective (%)',
  accessor: 'plcEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Minimum Lot Area per Dwelling Unit (sf)',
  accessor: 'lApDu',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Maximum Swelling Units per Acre (#)',
  accessor: 'dUpAc',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Floor-Area Ratio',
  accessor: 'far',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Effective Max Height',
  accessor: 'mxhtEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Effective Max Floors',
  accessor: 'mxflEff',
  classElement: 'mxfl',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}];

export default setColumns;
