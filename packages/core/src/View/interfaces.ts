import { BackgroundProps, BorderProps, ContainerProps } from '../css';
import { FlattenIntersection } from '../helpers/interfaces';

type Props = FlattenIntersection<
  BackgroundProps & BorderProps & ContainerProps
>;

export default Props;
