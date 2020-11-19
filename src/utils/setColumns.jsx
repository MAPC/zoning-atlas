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
  Header: 'Zone Name',
  accessor: 'zoName',
}, {
  Header: 'Zone Use Type',
  accessor: 'zoUsety',
  panel: 'function',
  Filter: MultiSelectColumnFilter,
  filter: 'multiple',
  searchText: 'Type here to search filters by zone use type',
  emptyFilterText: 'No zone use type selected',
}, {
  Header: 'Zone Use Description',
  accessor: 'zoUsede',
}, {
  Header: 'Multifamily',
  accessor: 'multifam',
  panel: 'multifam',
  Filter: MultiSelectColumnFilter,
  filter: 'multiple',
  searchText: 'Type here to search filters multifamily housing zoning',
  emptyFilterText: 'No multifamily housing zoning options selected',
}, {
  Header: 'Minimum Lot Size, Effective (sf)',
  accessor: 'mnlsEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
}, {
  Header: 'Percent Lot Coverage, Effective (%)',
  accessor: 'plcEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
}, {
  Header: 'Minimum Lot Area per Dwelling Unit (sf)',
  accessor: 'lApDu',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Maximum Height, Effective (ft)',
  accessor: 'mxhtEff',
}, {
  Header: 'Maximum Dwelling Units, Effective (#)',
  accessor: 'mxduEff',
}, {
  Header: 'Maximum Dwelling Units per Acre, Effective (#)',
  accessor: 'dUpAcEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Floor-Area Ratio, Effective',
  accessor: 'farEff',
  Filter: NumericRangeFilter,
  filter: 'numericRange',
  panel: 'lotDetails',
}, {
  Header: 'Date Spatial Data Received',
  accessor: 'spatialrec',
}];

export default setColumns;
