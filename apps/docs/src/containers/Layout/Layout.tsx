import { Container } from '@booleon/ui';

import { Aside } from './Aside';
import { Header } from './Header';
import { MDX } from './MDX';

export function Layout({ children, path }: any) {
  return (
    <MDX>
      <Container
        as="section"
        grid
        areas={`
          "HEADER HEADER"
          "ASIDE MAIN"
        `}
        rows_auto_1fr
        cols_auto_1fr
        w_percentage_100
        min_h_screen_height_100
        dark__bg_color_dark_background
        sc_hidden
        ft_color_base_grey_500
        dark__ft_color_base_white_500
      >
        <Header />
        <Aside slug={path?.replace(/\/|\\/, '')} />
        <Container area_MAIN p_2xl sc_auto>
          {children}
        </Container>
      </Container>
    </MDX>
  );
}
