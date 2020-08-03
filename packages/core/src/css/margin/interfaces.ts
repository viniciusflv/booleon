import { KeyinTypeOrString } from '../../lib/interfaces';

type Options =
  | 'm_NUMBER'
  | 'mx_NUMBER'
  | 'my_NUMBER'
  | 'mt_NUMBER'
  | 'mb_NUMBER'
  | 'ml_NUMBER'
  | 'mr_NUMBER'
  | 'm_auto'
  | 'mx_auto'
  | 'my_auto'
  | 'mt_auto'
  | 'mb_auto'
  | 'ml_auto'
  | 'mr_auto';

type Props = KeyinTypeOrString<Options>;

export default Props;
