import { KeyInType } from '../../helpers/interfaces';

type Options =
  | 'h_NUMBER'
  | 'h_max_NUMBER'
  | 'h_min_NUMBER'
  | 'h_screen_NUMBER'
  | 'h_max_screen_NUMBER'
  | 'h_min_screen_NUMBER'
  | 'h_full'
  | 'h_auto'
  | 'h_max_full'
  | 'h_max_auto'
  | 'h_min_full'
  | 'h_min_auto'
  | 'w_NUMBER'
  | 'w_max_NUMBER'
  | 'w_min_NUMBER'
  | 'w_screen_NUMBER'
  | 'w_max_screen_NUMBER'
  | 'w_min_screen_NUMBER'
  | 'w_full'
  | 'w_auto'
  | 'w_max_full'
  | 'w_max_auto'
  | 'w_min_full'
  | 'w_min_auto'
  | 'h_screen'
  | 'h_max_screen'
  | 'h_min_screen'
  | 'w_screen'
  | 'w_max_screen'
  | 'w_min_screen';

type Props = KeyInType<Options>;

export default Props;
