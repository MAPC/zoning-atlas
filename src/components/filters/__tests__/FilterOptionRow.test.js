import { describe, test, expect } from '@jest/globals';
import { selectionResult } from '../FilterOptionRow';

describe('Filter option row', () => {
  test('adds a new option to the empty filterValue array', () => {
    expect(selectionResult('Acton', undefined)).toEqual(['Acton']);
  });

  test('adds a new option to the already-populated filterValue array', () => {
    expect(selectionResult('Acton', ['Cambridge', 'Boston']).sort()).toEqual(['Acton', 'Cambridge', 'Boston'].sort());
  });

  test('removes a value from a filterValue array sized 2+', () => {
    expect(selectionResult('Acton', ['Cambridge', 'Acton', 'Boston']).sort()).toEqual(['Cambridge', 'Boston'].sort());
  });

  test('removes the last item from the filterValue array', () => {
    expect(selectionResult('Acton', ['Acton'])).toBeUndefined();
  });
});
