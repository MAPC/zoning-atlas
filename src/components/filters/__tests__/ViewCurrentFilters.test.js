import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { setItems } from '../ViewCurrentFilters';

describe('Current filters view', () => {
  test('Returns the emptyFilterText as a single entry if filterValue is undefined', () => {
    const container = setItems(undefined, 'No filter entries', () => {});
    expect(container.props.children).toBe('No filter entries');
  });

  test('Returns the emptyFilterText as a single entry if filterValue is an empty array', () => {
    const container = setItems([], 'No filter entries', () => {});
    expect(container.props.children).toBe('No filter entries');
  });

  test('Returns list of entries if filterValue has 1+ entries', () => {
    const container = setItems(['Acton', 'Belmont'], 'No filter entries', () => {});
    expect(container).toHaveLength(2);
  });
});
