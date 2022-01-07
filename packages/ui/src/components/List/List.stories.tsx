import { List } from '.';

export default {
  title: 'List',
  component: List,
};

const Template = (args: any) => <List {...args} />;

export const Default = () => (
  <List>
    <List.Item depth={2}>a</List.Item>
    <List.Item depth={3}>b</List.Item>
    <List.Item depth={2}>b</List.Item>
    <List.Item depth={4}>b</List.Item>
  </List>
);
