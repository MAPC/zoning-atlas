import { describe, test, expect } from '@jest/globals';
import { setLegend } from '../ChoroplethSelect';

describe('Map legend', () => {
  test('returns an array of length 5 for zone use', () => {
    expect(setLegend('zoUsety')).toHaveLength(5);
  });
});
