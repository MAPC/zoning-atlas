import { describe, test, expect } from '@jest/globals';
import { setMunicipalityFilter } from '../Layers';

describe('Zoning layer filter', () => {
  test('displays everything when filterValue does not exist', () => {
    expect(setMunicipalityFilter(undefined)).toBeNull();
  });

  test('displays one municipality when filterValue is a one-item-long Array', () => {
    expect(setMunicipalityFilter(['Acton'])).toBe("muni='Acton'");
  });

  test('displays multiple municipalities when filterValue is a multi-item array', () => {
    expect(setMunicipalityFilter(['Acton', 'Bellingham'])).toBe("muni='Acton' OR muni='Bellingham'");
  });
});
