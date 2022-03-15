import { dark, light } from '@booleon/icons';
import { useTheme } from '@booleon/react';

import { IconOff, IconOn, Toggle } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export const Default = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Toggle onPress={toggleTheme} isSelected={theme === 'light'}>
      <IconOn {...light} alt="light" />
      <IconOff {...dark} alt="dark" />
    </Toggle>
  );
};
