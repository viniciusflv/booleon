import * as icons from '@booleon/icons';
import { Button, Container, IconLast, Text } from '@booleon/ui';

import { usePageNavData } from '../../../fragments/NavDataFragment/NavDataFragment';

export function Aside({ slug }: any) {
  const { navigation } = usePageNavData(slug);
  return (
    <Container
      as="aside"
      area_ASIDE
      hidden
      sm__flex
      col
      main_start
      cross_end
      gap_lg
      p_2xl
      bdr_width_px
      bdr_style_solid
      bdr_color_base_grey_100
      dark__bdr_color_base_grey_900
    >
      {navigation?.map(({ path, title, icon }) => (
        <Button key={path} title={title} href={path} underlined>
          <IconLast
            {...icons[icon as keyof typeof icons]}
            alt={icon}
            width="1.2em"
            color="#D55901"
          />
          <Text ft_size_sm>{title}</Text>
        </Button>
      ))}
    </Container>
  );
}
