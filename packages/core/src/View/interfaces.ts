import {
  BackgroundProps,
  BorderProps,
  ContainerProps,
  CursorProps,
  FlexProps,
  FontProps,
  GradientProps,
  GridProps,
  MarginProps,
  OutlineProps,
  PaddingProps,
  ShadowProps,
} from '../css';
import { FlattenIntersection } from '../helpers/interfaces';

type Props = FlattenIntersection<
  & BackgroundProps
  & BorderProps
  & ContainerProps
  & CursorProps
  & FlexProps
  & FontProps
  & GradientProps
  & GridProps
  & MarginProps
  & OutlineProps
  & PaddingProps
  & ShadowProps
>;

export default Props;
