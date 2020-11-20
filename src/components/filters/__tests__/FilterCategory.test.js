import { describe, test, expect } from '@jest/globals';
import { isActiveCategory, isFiltered } from '../FilterCategory';

describe('Filter category', () => {
  test('is active but not filtered when activeCategory=category and no columns have filterValues', () => {
    expect(isActiveCategory('muni', 'muni')).toBe(true);
  });

  test('is filtered but not active when activeCategory!=category and at least one column has a filterValue', () => {
    expect(isActiveCategory('muni', 'multifam')).toBe(false);
    expect(isFiltered([{ filterValue: ['Acton'] }, { filterValue: undefined }])).toBe(true);
  });

  test('is active AND filtered when activeCategory=category and at least one column has a filterValue', () => {
    expect(isActiveCategory('muni', 'muni')).toBe(true);
    expect(isFiltered([{ filterValue: ['Acton'] }, { filterValue: undefined }])).toBe(true);
  });

  test('is neither active nor filtered when activeCategory!=category and no columns have filterValues', () => {
    expect(isActiveCategory('muni', 'multifam')).toBe(false);
    expect(isFiltered([{ filterValue: undefined }, { filterValue: undefined }])).toBe(false);
  });
});
