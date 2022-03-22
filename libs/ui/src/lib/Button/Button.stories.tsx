import { arrow } from '@booleon/icons';

import { Button } from '.';
import { IconFirst, IconLast } from '../IconText';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['blue', 'green'],
      },
    },
    onPress: { action: 'button-press' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Click',
  children: 'Button',
  outlined: false,
};

export const Blue = Template.bind({});
Blue.args = {
  children: 'Button',
  outlined: false,
  variant: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  children: 'Button',
  outlined: false,
  variant: 'green',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: [
    <IconFirst key="last" alt="Arrow Up" {...arrow} />,
    <IconLast key="last" alt="Arrow Up" {...arrow} />,
    'With Icon',
  ],
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

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined Button',
  outlined: true,
};

export const UnderlinedButton = Template.bind({});
UnderlinedButton.args = {
  children: [
    <IconFirst key="last" alt="Arrow Up" {...arrow} />,
    'Underlined Button',
    <IconLast key="last" alt="Arrow Up" {...arrow} />,
  ],
  underlined: true,
};
