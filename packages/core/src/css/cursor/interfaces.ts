import { KeyInType } from '../../lib/interfaces';

type Options =
  | 'cr_auto'
  | 'cr_default'
  | 'cr_pointer'
  | 'cr_wait'
  | 'cr_text'
  | 'cr_move'
  | 'cr_disallowed'
  | 'cr_cross'
  | 'cr_grabbing'
  | 'cr_help'
  | 'cry_resize'
  | 'cra_resize'
  | 'crb_resize'
  | 'crx_resize'
  | 'cr_no_drop'
  | 'cr_none'
  | 'cr_progress'
  | 'cr_zoom_in'
  | 'cr_zoom_out'
  | 'cr_noevents'
  | 'cr_events';

type Props = { cr_url?: string } & KeyInType<Options>;

export default Props;
