import { Container } from '@booleon/ui';

import { Aside } from './Aside';
import { Header } from './Header';
import { MDX } from './MDX';
import { Search } from './Search';

export function Layout({ children, path }: any) {
  return (
    <MDX>
      <Container
        as="section"
        grid
        grid_gap_xl
        areas={`
          "SEARCH HEADER _"
          "ASIDE MAIN HEADINGS"
        `}
        rows_auto_1fr
        cols_1fr_minmax_auto_1024px_1fr
        sm__cols_minmax_200px_1fr_minmax_auto_1024px_1fr
        w_percentage_100
        min_h_screen_height_100
        dark__bg_color_dark_background
        sc_hidden
        ft_family_sans
        ft_color_base_grey_500
        dark__ft_color_base_white_500
      >
        <Search />
        <Header />
        <Aside slug={path?.replace(/\/|\\/, '')} />
        <aside style={{ gridArea: 'HEADINGS' }} />
        <Container area_MAIN p_2xl sc_auto>
          {children}
        </Container>
      </Container>
    </MDX>
  );
}
