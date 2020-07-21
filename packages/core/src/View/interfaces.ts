import {
  BackgroundProps,
  BorderProps,
  ContainerProps,
  CursorProps,
  FlexProps,
} from '../css';
import { FlattenIntersection } from '../helpers/interfaces';

type Props = FlattenIntersection<
  & BackgroundProps
  & BorderProps
  & ContainerProps
  & CursorProps
  & FlexProps
>;

export default Props;
