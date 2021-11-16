import { Field } from '.';

export default {
  title: 'Field',
  component: Field,
};

const Template = (args: any) => <Field {...args} />;

export const Text = Template.bind({});
Text.args = {
  hidden: false,
  onChange: console.log,
};
