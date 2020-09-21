import { KeyInType } from '../../lib/interfaces';

type Options =
  | 'ts_duration_NUMBER'
  | 'ts_delay_NUMBER'
  | 'ts_none'
  | 'ts_all'
  | 'ts'
  | 'ts_colors'
  | 'ts_opacity'
  | 'ts_shadow'
  | 'ts_transform'
  | 'ts_ease_linear'
  | 'ts_ease_in'
  | 'ts_ease_out'
  | 'ts_ease_in_out';

type Props = KeyInType<Options>;

export default Props;
