import { Svg } from '.';
import type { SvgProps } from '.';
import {
  animated,
  booleon,
  linearGradient,
  radialGradient,
} from '../../assets';

export default {
  title: 'Components/Svg',
  component: Svg,
  parameters: {
    controls: { disable: true },
  },
};

const Template = (args: SvgProps) => <Svg {...args} alt="icon" />;

export const Static: any = Template.bind({});
Static.args = booleon;

export const Animated: any = Template.bind({});
Animated.args = animated;

export const LinearGradient: any = Template.bind({});
LinearGradient.args = linearGradient;

export const RadialGradient: any = Template.bind({});
RadialGradient.args = radialGradient;
