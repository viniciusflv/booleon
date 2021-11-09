import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Drop } from '.';

expect.extend(toHaveNoViolations);

describe('Drop', () => {
  test('default', async () => {
    const { container } = render(
      <Drop open>
        <Drop.Trigger>
          <span>hover me</span>
        </Drop.Trigger>
        <Drop.Content>
          <p style={{ display: 'flex', flexDirection: 'column' }}>
            <span>uhasduha uahduihasda uhuadhuhuchh</span>
            <span>uhasduha uahduihasda uhuadhuhuchh</span>
            <span>uhasduha uahduihasda uhuadhuhuchh</span>
          </p>
        </Drop.Content>
      </Drop>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
