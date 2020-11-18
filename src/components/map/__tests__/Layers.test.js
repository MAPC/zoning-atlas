import { describe, test, expect } from '@jest/globals';
import { setWhere } from '../Layers';

const noFilters = [
  { filterValue: undefined }, // Municipalities
  { filterValue: undefined }, // Zone Use Type
]

const andExample = [
  { filterValue: ['Acton'] }, // Municipalities
  { filterValue: ['Residential'] }, // Zone Use Type
];

const orExample = [
  { filterValue: ['Acton', 'Bedford'] }, // Municipalities
  { filterValue: undefined }, // Zone Use Type
];

const orAndExample = [
  { filterValue: ['Acton', 'Arlington', 'Ashland'] }, // Municipalities
  { filterValue: ['Residential', 'Non-Residential'] }, // Zone Use Type
];

describe('Zoning layer filter', () => {
  test('displays everything when no filterValues are defined', () => {
    expect(setWhere(noFilters)).toBe('');
  });

  test('displays two single-item statements combined by an AND statement', () => {
    expect(setWhere(andExample)).toBe("(muni='Acton') AND (ZO_USETY_1=1)");
  });

  test('displays one multiple-item statement with items separated by an OR statement', () => {
    expect(setWhere(orExample)).toBe("muni='Acton' OR muni='Bedford'");
  });

  test('displays multiple multi-item statements with items of one category separated with OR statements, and parentheticals separated by an AND', () => {
    expect(setWhere(orAndExample)).toBe("(muni='Acton' OR muni='Arlington' OR muni='Ashland') AND (ZO_USETY_1=1 OR ZO_USETY_1=2)");
  });
});
