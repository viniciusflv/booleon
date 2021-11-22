import { Svg } from '.';
import type { SvgProps } from '.';
import {
  booleon,
  linearGradient,
  radialGradient,
  animated,
} from '../../assets';

export default {
  title: 'Svg',
  component: Svg,
};

const Template = (args: SvgProps) => <Svg {...args} />;

export const Static = Template.bind({});
Static.args = booleon;

export const Animated = Template.bind({});
Animated.args = animated;

export const LinearGradient = Template.bind({});
LinearGradient.args = linearGradient;

export const RadialGradient = Template.bind({});
RadialGradient.args = radialGradient;
