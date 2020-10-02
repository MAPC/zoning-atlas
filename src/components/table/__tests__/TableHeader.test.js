import { describe, test, expect } from '@jest/globals';
import { arrowDown, arrowUp, handleHover } from '../TableHeader';

describe('Table Header', () => {
  describe('will display a down-arrow', () => {
    test('when unsorted and hovered over', () => {
      expect(handleHover(true, false, false)).toBe(arrowDown);
    });
    test('when sorted A-Z and not hovered over', () => {
      expect(handleHover(false, true, false)).toBe(arrowDown);
    });
    test('when sorted A-Z and hovered over', () => {
      expect(handleHover(true, true, false)).toBe(arrowDown);
    });
  });

  describe('will display an up-arrow', () => {
    test('when sorted Z-A and not hovered over', () => {
      expect(handleHover(false, true, true)).toBe(arrowUp);
    });

    test('when sorted Z-A and hovered over', () => {
      expect(handleHover(true, true, true)).toBe(arrowUp);
    });
  });

  test('will display nothing when not sorted and not hovered over', () => {
    expect(handleHover(false, false, false)).toBe('');
  });
});
