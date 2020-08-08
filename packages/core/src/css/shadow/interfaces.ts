import { KeyInType } from '../../lib/interfaces';

type Options =
  | 'sd_1'
  | 'sd_2'
  | 'sd_3'
  | 'sd_4'
  | 'sd_6'
  | 'sd_8'
  | 'sd_9'
  | 'sd_12'
  | 'sd_16'
  | 'sd_24'
  | 'sd_1'
  | 'sdi_2'
  | 'sdi_3'
  | 'sdi_4'
  | 'sdi_6'
  | 'sdi_8'
  | 'sdi_9'
  | 'sdi_12'
  | 'sdi_16'
  | 'sdi_24';

type Props = KeyInType<Options>;

export default Props;
