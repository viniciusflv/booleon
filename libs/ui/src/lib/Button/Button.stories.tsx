import { arrow } from '@booleon/icons';

import { Button } from '.';
import { IconLast } from '../IconText';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'button-press' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  outlined: false,
};

export const Blue = Template.bind({});
Blue.args = {
  children: 'Button',
  outlined: false,
  type: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  children: 'Button',
  outlined: false,
  type: 'green',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: [<IconLast key="last" alt="Arrow Up" {...arrow} />, 'With Icon'],
  outlined: false,
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: [<IconLast key="last" alt="Arrow Up" {...arrow} />],
  outlined: false,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Link Button',
  href: '#',
  target: '__blank',
};
