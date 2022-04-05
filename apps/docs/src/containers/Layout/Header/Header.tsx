import { dark, github, light, logo } from '@booleon/icons';
import { useTheme } from '@booleon/react';
import {
  Button,
  Container,
  IconFirst,
  IconOff,
  IconOn,
  Text,
  Toggle,
} from '@booleon/ui';

import { Search } from './Search';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container as="header" area_HEADER w_screen_width_100>
      <Container
        as="nav"
        flex
        main_between
        cross_center
        gap_sm
        p_2xl
        // max_w_15xl
        // w_percentage_100
        m_auto
      >
        <Button href="/" title="Logo" underlined>
          <IconFirst alt="Logo" {...logo} width="2em" height="2em" />
          <Text hidden sm__block>
            Booleon
          </Text>
        </Button>
        <Container flex main_between cross_center gap_xl>
          <Search />
          <Button
            title="github"
            target="__blank"
            href="https://github.com/viniciusflv/booleon"
          >
            <IconFirst alt="github" {...github} />
          </Button>
          <Toggle onPress={toggleTheme} isSelected={theme === 'light'}>
            <IconOn {...light} alt="light" />
            <IconOff {...dark} alt="dark" />
          </Toggle>
        </Container>
      </Container>
    </Container>
  );
}
