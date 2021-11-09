import { KeyValue } from '.';

export default {
  title: 'KeyValue',
  component: KeyValue,
};

const Template = (args: any) => <KeyValue {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  entries: [
    ['ani_name_NAME', 'animation-name:NAME;'],
    ['ani_name_NAME', 'animation-name:NAME;'],
  ],
};
