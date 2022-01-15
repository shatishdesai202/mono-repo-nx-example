import { render } from '@testing-library/react';

import TeamGreen from './team-green';

describe('TeamGreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamGreen />);
    expect(baseElement).toBeTruthy();
  });
});
