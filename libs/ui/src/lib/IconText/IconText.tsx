import { Children } from 'react';

import { beSlot, useSlots } from 'use-slots';

import { atLeast } from '../../utils/atLeast';
import { Svg } from '../Svg';
import type { SvgProps } from '../Svg';
import { Text } from '../Text';
import type { IconTextProps } from './IconText.types';

function IconText({ children, col = false, ...props }: IconTextProps) {
  const { firstIcon, lastIcon } = useSlots(children);
  //@ts-expect-error
  const text = Children.toArray(children).find((child) => !child?.type?.slot);

  return (
    <Text
      flex
      main_center
      cross_center
      col={col}
      gap_xl={atLeast(2, firstIcon, lastIcon, text)}
      main_between={atLeast(2, firstIcon, lastIcon, text)}
      {...props}
    >
      {firstIcon}
      {text ? (
        <Text ft_no_wrap ft_select_none>
          {text}
        </Text>
      ) : null}
      {lastIcon}
    </Text>
  );
}

const Icon = (props: SvgProps) => (
  <Svg {...props} tag="i" color="currentColor" width="1.5em" height="1.5em" />
);

export const IconFirst = beSlot(
  (props: SvgProps) => <Icon {...props} />,
  'firstIcon',
);

export const IconLast = beSlot(
  (props: SvgProps) => <Icon {...props} />,
  'lastIcon',
);

export default IconText;
