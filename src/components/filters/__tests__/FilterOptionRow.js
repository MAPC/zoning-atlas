import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

import FilterOptionRow from '../FilterOptionRow';

describe('Filter option (row)', () => {
  it('renders', () => {
    render(<FilterOptionRow index={0} option="Acton" setFilter={() => null} />);
  });

  it('displays the correct value', () => {
    render(<FilterOptionRow index={0} option="Acton" setFilter={() => null} />);
    expect(screen.getByText('Acton')).toBeInTheDocument();
  });

  it('becomes active on option click', () => {
    render(<FilterOptionRow index={0} option="Acton" setFilter={() => null} />);
    fireEvent.click(screen.getByText('Acton'));
    expect(screen.getByText('Acton')).toHaveClass('filters__value--active');
  });

  it('turns inactive on double option click', () => {
    render(<FilterOptionRow index={0} option="Acton" setFilter={() => null} />);
    fireEvent.dblClick(screen.getByText('Acton'));
    expect(screen.getByText('Acton')).not.toHaveClass('filters__value--active');
  });
});
