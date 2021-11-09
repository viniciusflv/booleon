import { Svg } from '.';
import type { SvgProps } from '.';
import { booleon } from '../../assets';

export default {
  title: 'Svg',
  component: Svg,
};

const Template = (args: SvgProps) => <Svg {...args} />;

export const Primary = Template.bind({});
Primary.args = booleon;
