import React from 'react';

import { Container } from './Container';
import { Item } from './Item';

const List = {
  Dotted: (props: any) => <Container {...props} type="dotted" />,
  Numbered: (props: any) => <Container {...props} type="numbered" />,
  Item,
};

export default List;
