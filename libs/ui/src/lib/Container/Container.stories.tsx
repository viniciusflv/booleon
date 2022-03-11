import { Container } from '.';

export default {
  title: 'Components/Container',
  component: Container,
  parameters: {
    controls: { disable: true },
  },
};

export const Flex = () => {
  return (
    <Container
      flex
      do_wrap
      grow
      main_between
      gap_xl
      p_xl
      bd_width_lg
      bd_style_solid
      bd_color_base_white_100
      bg_color_base_orange_100
    >
      {Array.from(Array(4)).map((_, i) => (
        <Container
          key={i}
          w_7xl
          h_7xl
          bd_width_lg
          bd_style_solid
          bd_color_base_white_100
          bg_color_base_blue_500={i % 2 === 0}
          bg_color_base_green_500={i % 2 !== 0}
        />
      ))}
    </Container>
  );
};

export const Grid = () => {
  return (
    <Container
      grid
      grid_gap_xl
      areas={`
        "AREA_0"
        "AREA_1"
        "AREA_2"
        "AREA_3"
      `}
      sm__areas={`
        "AREA_0 AREA_0"
        "AREA_1 AREA_2"
        "AREA_3 AREA_3"
      `}
      w_percentage_100
      p_xl
      bd_width_lg
      bd_style_solid
      bd_color_base_white_100
      bg_color_base_orange_100
    >
      {Array.from(Array(4)).map((_, i) => (
        <Container
          key={i}
          area_$={`AREA_${i}`}
          h_7xl
          bd_width_lg
          bd_style_solid
          bd_color_base_white_100
          bg_color_base_blue_500={i % 2 === 0}
          bg_color_base_green_500={i % 2 !== 0}
        />
      ))}
    </Container>
  );
};
