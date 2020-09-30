import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';

import FilterOptionRow from '../FilterOptionRow';

describe('Filter option (row)', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FilterOptionRow index={0} option="Acton" setFilter={() => null}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
