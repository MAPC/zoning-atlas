import { describe, test, expect } from '@jest/globals';
import { checkFilter } from '../NumericRangeFilter';

describe('Table filters panel', () => {
  test('returns null if no operand is provided', () => {
    expect(checkFilter('gt', '')).toEqual(null);
  });

  test('returns filterValue when both operand and operator are provided', () => {
    expect(checkFilter('gt', 1)).toEqual({ operator: 'gt', operand: 1 });
  });
});
