import {
  BackgroundProps,
  BorderProps,
  ContainerProps,
  CursorProps,
} from '../css';
import { FlattenIntersection } from '../helpers/interfaces';

type Props = FlattenIntersection<
  & BackgroundProps
  & BorderProps
  & ContainerProps
  & CursorProps
>;

export default Props;
