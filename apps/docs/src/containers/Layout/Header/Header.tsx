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

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container as="header" area_HEADER>
      <Container
        as="nav"
        flex
        main_between
        cross_center
        gap_sm
        p_2xl
        m_auto
        bdb_width_px
        bdb_style_solid
        bdb_color_base_grey_100
        dark__bdb_color_base_grey_900
      >
        <Button href="/" title="Logo" underlined>
          <IconFirst alt="Logo" {...logo} width="2em" height="2em" />
          <Text>Booleon</Text>
        </Button>
        <Container flex main_between cross_center gap_xl>
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
