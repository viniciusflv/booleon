import { forwardRef } from 'react';
import type { ReactNode, Ref } from 'react';

import { flex, font } from '@booleon/modules';
import { booleon } from '@booleon/react';
import type { InferBooleonComponent } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';

const _List = booleon.ul(font);

const _Item = booleon.li({ ...flex, ...font });

export type ListRef = HTMLUListElement;
export type ListProps = InferBooleonComponent<typeof _List>;
export type ListItemProps = {
  depth?: number;
  children?: ReactNode;
};

function List({ children, ...props }: ListProps, ref: Ref<ListRef>) {
  const forwardRef = useForwardedRef(ref);

  return (
    <_List ref={forwardRef} ft_family_sans {...props}>
      {children}
    </_List>
  );
}

export function ListItem({ depth = 1, children }: ListItemProps) {
  let item = children;

  if (depth > 1) {
    let count = depth;

    while (count > 1) {
      item = (
        <_List>
          <ListItem>{item}</ListItem>
        </_List>
      );
      count--;
    }

    return <_Item li_none>{item}</_Item>;
  }

  return (
    <_Item flex main_start li_none>
      {item}
    </_Item>
  );
}

const ForwardedComponent = forwardRef(List);

export { ForwardedComponent as List };
