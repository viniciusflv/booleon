// import React, { useEffect, useState } from 'react';

// import { withKnobs } from '@storybook/addon-knobs';

// import { hocBooleon } from '../../packages/core/src';
// import {
//   animation,
//   background,
//   border,
//   container,
//   cursor,
//   filter,
//   flex,
//   font,
//   gradient,
//   grid,
//   spacing,
//   outline,
//   shadow,
//   sizing,
//   transform,
//   transition,
// } from '../../packages/modules/src';
// import benchmarkProps from '../benchmarkProps';

// const Text = hocBooleon(
//   (props) => <span {...props} />,
//   animation,
//   background,
//   border,
//   container,
//   cursor,
//   filter,
//   flex,
//   font,
//   gradient,
//   grid,
//   spacing,
//   outline,
//   shadow,
//   sizing,
//   transform,
//   transition,
// );

// export default {
//   title: 'Core / New',
//   component: Text,
//   decorators: [withKnobs],
// };

// export const Default = () => {
//   const [bool, setBool] = useState(true);
//   useEffect(() => {
//     const timeout = setTimeout(() => setBool(!bool), 1000);
//     return () => clearTimeout(timeout);
//   }, [bool]);
//   return <Text {...benchmarkProps(bool)}>AAA</Text>;
// };
