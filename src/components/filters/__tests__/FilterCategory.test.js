import { describe, test, expect } from '@jest/globals';
import { setModifierClasses } from '../FilterCategory';

describe('Filter category', () => {
  test('is active but not filtered when activeCategory=category and no columns have filterValues', () => {
    expect(setModifierClasses('muni', 'muni', [{ filterValue: undefined }, { filterValue: undefined }])).toBe('filters-panel__category filters-panel__category--active');
  });

  test('is filtered but not active when activeCategory!=category and at least one column has a filterValue', () => {
    expect(setModifierClasses('muni', 'multifam', [{ filterValue: ['Acton'] }, { filterValue: undefined }])).toBe('filters-panel__category filters-panel__category--filtered');
  });

  test('is active AND filtered when activeCategory=category and at least one column has a filterValue', () => {
    expect(setModifierClasses('muni', 'muni', [{ filterValue: ['Acton'] }, { filterValue: undefined }])).toBe('filters-panel__category filters-panel__category--active filters-panel__category--filtered');
  });

  test('is neither active nor filtered when activeCategory!=category and no columns have filterValues', () => {
    expect(setModifierClasses('muni', 'multifam', [{ filterValue: undefined }, { filterValue: undefined }])).toBe('filters-panel__category');
  });
});
