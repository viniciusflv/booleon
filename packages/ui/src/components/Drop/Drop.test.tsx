import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Drop, DropTrigger, DropContent } from '.';

expect.extend(toHaveNoViolations);

describe.skip('Drop', () => {
  test('default', async () => {
    const { container } = render(
      <Drop open>
        <DropTrigger>
          <span>hover me</span>
        </DropTrigger>
        <DropContent>
          <p style={{ display: 'flex', flexDirection: 'column' }}>
            <span>uhasduha uahduihasda uhuadhuhuchh</span>
            <span>uhasduha uahduihasda uhuadhuhuchh</span>
            <span>uhasduha uahduihasda uhuadhuhuchh</span>
          </p>
        </DropContent>
      </Drop>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
