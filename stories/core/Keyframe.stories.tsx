// import React, { FC } from 'react';

// import { withKnobs } from '@storybook/addon-knobs';

// import { View } from '../../packages/base/src';
// import { Keyframe } from '../../packages/base/src/Keyframe';

// export default {
//   title: 'Core / Keyframe',
//   component: View,
//   decorators: [withKnobs],
// };

// const Keyframes: FC<any> = ({ children }) => (
//   <>
//     <Keyframe.provider scale>
//       <Keyframe.state sl_50 />
//       <Keyframe.state sl_100 />
//     </Keyframe.provider>
//     <Keyframe.provider spin>
//       <Keyframe.state rt_360 />
//     </Keyframe.provider>
//     <Keyframe.provider turn>
//       <Keyframe.state rt_180 />
//     </Keyframe.provider>
//     <Keyframe.provider drop>
//       <Keyframe.state top />
//       <Keyframe.state top_full />
//     </Keyframe.provider>
//     <Keyframe.provider left>
//       <Keyframe.state left_neg />
//       <Keyframe.state left />
//     </Keyframe.provider>
//     <Keyframe.provider right>
//       <Keyframe.state right_neg />
//       <Keyframe.state right />
//     </Keyframe.provider>
//     {children}
//   </>
// );
// export const Default = () => {
//   return (
//     <Keyframes>
//       <View.div relative>
//         <View.multiple
//           h_50
//           w_50
//           ani_duration_3s
//           ani_iteration_infinite
//           ani_forwards
//           ani_ease_in_out>
//           <View.div bg_fd0f00 kf_scale />
//           <View.div bg_5f0f55 kf_spin />
//           <View.div bg_505f50 kf_turn />
//           <View.div bg_0d0f50 kf_left relative />
//           <View.div bg_0d5ff0 kf_right relative />
//           <View.div bg_0ffd5f kf_drop absolute />
//         </View.multiple>
//       </View.div>
//     </Keyframes>
//   );
// };
