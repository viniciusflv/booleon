import { Text } from '.';
import type { TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args: TextProps) => <Text ta {...args} />;

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
  tag: 'span',
  children: 'Text',
};
