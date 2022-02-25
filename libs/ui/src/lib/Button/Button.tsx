import { Container } from '../Container';
import { IconText } from '../IconText';

function Button({ children }) {
  return (
    <Container
      tag="button"
      cr_pointer
      px_4xl
      py_2xl
      bd_width_px
      bd_radius_pill
      bd_color_brand_primary
      bg_color_brand_secondary
      hover__bg_color_brand_primary
    >
      <IconText ft_size_md ft_weight_bold ft_spacing_px ft_color_base_white_100>
        {children}
      </IconText>
    </Container>
  );
}

export default Button;
