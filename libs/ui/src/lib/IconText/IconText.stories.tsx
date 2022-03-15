import { arrow } from '@booleon/icons';

import type { IconTextProps } from '.';
import { IconFirst, IconLast, IconText } from '.';

export default {
  title: 'Components/IconText',
  component: IconText,
  subcomponents: { IconFirst, IconLast },
  argTypes: {
    col: { defaultValue: false, type: 'boolean' },
    ft_size_xl: { defaultValue: true, type: 'boolean' },
    ft_color_base_blue_500: { defaultValue: true, type: 'boolean' },
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Component that handles the combination between Text and Icon',
      },
    },
  },
};

export const Default = (args: IconTextProps) => {
  return (
    <IconText {...args} as="a">
      <IconFirst {...arrow} alt="lion icon" />
      IconText
      <IconLast {...arrow} alt="lion icon" />
    </IconText>
  );
};
