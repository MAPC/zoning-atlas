import { describe, test, expect } from '@jest/globals';
import { multiple, inclusiveOr, numericRange } from '../setFilterTypes';

const sampleRows = [
  {
    id: 0,
    values: {
      muni: 'Acton',
      mxflEff: 2,
      zoName: ['A', 'B'],
    },
  }, {
    id: 1,
    values: {
      muni: 'Boston',
      mxflEff: 2.5,
      zoName: ['A'],
    },
  }, {
    id: 2,
    values: {
      muni: 'Boston',
      mxflEff: 2,
      zoName: ['B'],
    },
  }, {
    id: 3,
    values: {
      muni: 'Canton',
      mxflEff: 1.5,
      zoName: ['A', 'B'],
    },
  }, {
    id: 4,
    values: {
      muni: 'Acton',
      mxflEff: 1,
      zoName: ['B'],
    },
  }, {
    id: 5,
    values: {
      muni: 'Boston',
      mxflEff: 1,
      zoName: ['C'],
    },
  },
];

describe('Multi-select filter', () => {
  test('returns all rows when no filter value is provided', () => {
    expect(multiple(sampleRows, 'muni', undefined)).toEqual(sampleRows);
  });

  test('returns only rows matching the single filter value option', () => {
    expect(multiple(sampleRows, 'muni', ['Acton'])).toEqual([sampleRows[0], sampleRows[4]]);
  });

  test('returns all rows matching any of the filter value options', () => {
    expect(multiple(sampleRows, 'muni', ['Acton', 'Canton'])).toEqual([sampleRows[0], sampleRows[3], sampleRows[4]]);
  });
});

describe('Inclusive OR filter', () => {
  test('returns all rows when no filter value is provided', () => {
    expect(inclusiveOr(sampleRows, 'zoName', undefined)).toEqual(sampleRows);
  });

  test('returns only rows including the single filter value option', () => {
    expect(inclusiveOr(sampleRows, 'zoName', ['A'])).toEqual([sampleRows[0], sampleRows[1], sampleRows[3]]);
  });

  test('returns rows including any of the filter value options', () => {
    expect(inclusiveOr(sampleRows, 'zoName', ['A', 'B'])).toEqual([sampleRows[0], sampleRows[1], sampleRows[2], sampleRows[3], sampleRows[4]]);
  });
});

describe('Numeric range filter', () => {
  test('returns all rows when the filter value is undefined', () => {
    expect(numericRange(sampleRows, 'mxflEff', undefined)).toEqual(sampleRows);
  });

  test('returns all rows equal to filter value', () => {
    expect(numericRange(sampleRows, 'mxflEff', { operator: 'eq', operand: 2 })).toEqual([sampleRows[0], sampleRows[2]]);
  });

  test('returns all rows greater than filter value', () => {
    expect(numericRange(sampleRows, 'mxflEff', { operator: 'gt', operand: 2 })).toEqual([sampleRows[1]]);
  });

  test('returns all rows less than filter value', () => {
    expect(numericRange(sampleRows, 'mxflEff', { operator: 'lt', operand: 2 })).toEqual([sampleRows[3], sampleRows[4], sampleRows[5]]);
  });
});
