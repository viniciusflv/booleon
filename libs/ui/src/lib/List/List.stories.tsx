import { Button } from '../Button';
import { List, ListItem } from './List';

export default {
  title: 'Components/List',
  component: List,
};

export const Default = () => {
  return (
    <List>
      {Array.from(Array(5)).map((_, i) => (
        <ListItem key={i} depth={i}>
          <Button
            href="#"
            target="__blank"
            underlined
            title="Lorem, ipsum dolor sit amet"
          >
            Lorem, ipsum dolor sit amet
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
