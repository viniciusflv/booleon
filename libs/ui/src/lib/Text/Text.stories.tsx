import { Text } from '.';
import type { TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
  children: 'Text',
};
