import { arrow } from '@booleon/icons';

import { Button } from '.';
import { IconLast } from '../IconText';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => {
  return (
    <Button>
      Button
      <IconLast {...arrow} aria="arrow" />
    </Button>
  );
};
