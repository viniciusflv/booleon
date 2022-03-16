import * as icons from '@booleon/icons';

import { Container } from './Container';
import { Svg } from './Svg';
import { Text } from './Text';

export default {
  title: 'Icons/List',
  component: Svg,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['blue', 'green'],
      },
    },
    onPress: { action: 'button-press' },
  },
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
};

export const List = () => {
  return (
    <Container flex do_wrap gap_2xl p_2xl>
      {Object.keys(icons).map((icon) => (
        <Container
          key={icon}
          flex
          gap_2xl
          col
          main_center
          cross_center
          w_7xl
          h_7xl
        >
          <Svg {...icons[icon]} width="50px" height="50px" alt={icon} />
          <Text ft_family_sans ft_color_base_grey_400>
            {icon}
          </Text>
        </Container>
      ))}
    </Container>
  );
};
