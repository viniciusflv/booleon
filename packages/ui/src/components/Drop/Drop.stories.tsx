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
      <div>
        <p>
          <a href="#">link</a>
        </p>
        <p>
          <a href="#">link</a>
        </p>
        <p>
          <a href="#">link</a>
        </p>
      </div>
    </DropContent>
    <p>aaaa</p>
  </Drop>
);

export const Primary = Template.bind({});
Primary.args = {
  click: false,
  open: false,
};
