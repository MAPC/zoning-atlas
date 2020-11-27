import { describe, test, expect } from '@jest/globals';
import { setWhere } from '../Layers';

const noFilters = [
  { filterValue: undefined }, // Municipalities
  { filterValue: undefined }, //
  { filterValue: undefined }, // Zone Use Type
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, // Minimum lot area per dwelling unit
  { filterValue: undefined }, // LApDU
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, // DUpAC_EFF
  { filterValue: undefined }, // FAR_EFF
];

const andExample = [
  { filterValue: ['Acton'] }, // Municipalities
  { filterValue: undefined }, //
  { filterValue: ['Residential'] }, // Zone Use Type
  { filterValue: undefined }, //
  { filterValue: ['No'] }, // Multifamily
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: { operand: '2', operator: 'lt' } }, // Minimum lot area per dwelling unit
  { filterValue: undefined }, // LApDU
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, // DUpAC_EFF
  { filterValue: undefined }, // FAR_EFF
];

const orExample = [
  { filterValue: ['Acton', 'Bedford'] }, // Municipalities
  { filterValue: undefined }, // Zone Use Type
  { filterValue: undefined }, // Multifamily
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, // Minimum lot area per dwelling unit
  { filterValue: undefined }, // LApDU
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, // DUpAC_EFF
  { filterValue: undefined }, // FAR_EFF
];

const orAndExample = [
  { filterValue: ['Acton', 'Arlington', 'Ashland'] }, // Municipalities
  { filterValue: undefined }, //
  { filterValue: ['Residential', 'Non-Residential'] }, // Zone Use Type
  { filterValue: undefined }, //
  { filterValue: ['No', 'By right'] }, // Multifamily
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: { operand: '2', operator: 'lt' } }, // Minimum lot area per dwelling unit
  { filterValue: undefined }, // LApDU
  { filterValue: undefined }, //
  { filterValue: undefined }, //
  { filterValue: undefined }, // DUpAC_EFF
  { filterValue: undefined }, // FAR_EFF
];

describe('Zoning layer filter', () => {
  test('displays everything when no filterValues are defined', () => {
    expect(setWhere(noFilters)).toBe('');
  });

  test('displays three single-item statements combined by an AND statement', () => {
    expect(setWhere(andExample)).toBe("(muni = 'Acton') AND (ZO_USETY_1 = 1) AND (MULTIFAM = 0) AND (LApDU < 2)");
  });

  test('displays one multiple-item statement with items separated by an OR statement', () => {
    expect(setWhere(orExample)).toBe("muni = 'Acton' OR muni = 'Bedford'");
  });

  test('displays multiple multi-item statements with items of one category separated with OR statements, and parentheticals separated by an AND', () => {
    expect(setWhere(orAndExample)).toBe("(muni = 'Acton' OR muni = 'Arlington' OR muni = 'Ashland') AND (ZO_USETY_1 = 1 OR ZO_USETY_1 = 2) AND (MULTIFAM = 0 OR MULTIFAM = 2) AND (LApDU < 2)");
  });
});
