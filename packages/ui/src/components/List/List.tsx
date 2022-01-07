import { flex, font, spacing } from '@booleon/modules';
import { booleon } from '@booleon/react';

const _List = booleon.ul({ ...flex, ...font, ...spacing });
const _Item = booleon.li(font);

function List({ type = 'ul', children }: any) {
  return (
    <_List tag={type} flex col gap_5rxm m_0 pl_10rxm>
      {children}
    </_List>
  );
}

List.Item = function ({ depth = 1, children }: any) {
  let item = children;

  if (depth > 1) {
    let count = depth;

    while (count > 1) {
      item = (
        <List>
          <List.Item>{item}</List.Item>
        </List>
      );
      count--;
    }
  }

  return <_Item li_none>{item}</_Item>;
};

export default List;
