import { Drop, DropContent, DropTrigger } from '.';
import type { DropProps } from '.';

export default {
  title: 'Drop',
  component: Drop,
};

const Template = (args: DropProps) => (
  <Drop {...args}>
    <DropTrigger>
      <span>hover me</span>
    </DropTrigger>
    <DropContent>
      <p style={{ display: 'flex', flexDirection: 'column' }}>
        <span>uhasduha uahduihasda uhuadhuhuchh</span>
        <span>uhasduha uahduihasda uhuadhuhuchh</span>
        <span>uhasduha uahduihasda uhuadhuhuchh</span>
      </p>
    </DropContent>
  </Drop>
);

export const Primary = Template.bind({});
Primary.args = {
  click: false,
  open: false,
};
