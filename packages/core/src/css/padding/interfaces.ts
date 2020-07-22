import {
  FlattenIntersection,
  KeyinTypeOrString,
} from '../../helpers/interfaces';

type Options =
  | 'p_NUMBER'
  | 'px_NUMBER'
  | 'py_NUMBER'
  | 'pt_NUMBER'
  | 'pb_NUMBER'
  | 'pl_NUMBER'
  | 'pr_NUMBER';

type Props = FlattenIntersection<KeyinTypeOrString<Options>>;

export default Props;
