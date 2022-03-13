import { Toggle } from '.';

// import type { TextProps } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Toggle',
};
