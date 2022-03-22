import { SearchField } from './';

// import type { TextProps } from './';

export default {
  title: 'Components/SearchField',
  component: SearchField,
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  label: 'Label',
  hidden: true,
};
