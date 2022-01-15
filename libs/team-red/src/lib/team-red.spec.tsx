import { render } from '@testing-library/react';

import TeamRed from './team-red';

describe('TeamRed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamRed />);
    expect(baseElement).toBeTruthy();
  });
});
