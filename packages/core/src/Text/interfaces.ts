import { ContainerProps, FontProps, MarginProps } from '../css';
import { FlattenIntersection } from '../helpers/interfaces';

type Props = FlattenIntersection<
  & FontProps
  & MarginProps
  & ContainerProps
>;

export default Props;
