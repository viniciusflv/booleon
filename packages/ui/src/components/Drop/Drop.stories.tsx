import { Drop, DropTrigger, DropContent } from '.';
import type { DropProps } from '.';

export default {
  title: 'Drop',
  component: Drop,
};

const Template = (args: DropProps) => (
  <Drop {...args}>
    <DropTrigger>
      <a href="#">link</a>
    </DropTrigger>
    <DropContent>
      <p style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
      </p>
    </DropContent>
    <p>aaaa</p>
  </Drop>
);

export const Primary = Template.bind({});
Primary.args = {
  click: false,
  open: false,
};
