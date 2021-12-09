import { Button } from './Button';
import { ButtonProps } from './Button.type';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
  col: false,
  last: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    paths: [
      {
        d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
      },
    ],
  },
  first: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    paths: [
      {
        d: 'M12 5.097L1.299 15.798l2.515 2.515L12 10.144l8.186 8.169 2.515-2.515z',
      },
    ],
  },
};
