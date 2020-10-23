// import React, { useState, useEffect } from 'react';

// import { withKnobs } from '@storybook/addon-knobs';

// import { View } from '../../packages/base/src';
// import benchmarkProps from '../benchmarkProps';

// export default {
//   title: 'Core / Benchmark',
//   component: View,
//   decorators: [withKnobs],
// };

// const Div = (props) => <div {...props} />;

// const DivStyled = View.styled(Div);

// const Styled = ({ bool }) => (
//   <>
//     <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
//     <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
//     <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
//     {/* <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
//     <DivStyled {...benchmarkProps(bool)}>styled</DivStyled> */}
//   </>
// );

// const Main = ({ bool }) => (
//   <>
//     <View.div content={true} {...benchmarkProps(bool)}>
//       div
//     </View.div>
//     <View.div {...benchmarkProps(bool)}>div</View.div>
//     <View.div {...benchmarkProps(bool)}>div</View.div>
//     {/* <View.div {...benchmarkProps(bool)}>div</View.div>
//     <View.div {...benchmarkProps(bool)}>div</View.div> */}
//   </>
// );

// const Multiple = ({ bool }) => (
//   <View.multiple {...benchmarkProps(bool)}>
//     <div>multiple</div>
//     <div>multiple</div>
//     <div>multiple</div>
//     {/* <div>multiple</div>
//     <div>multiple</div> */}
//   </View.multiple>
// );

// export const Default = () => {
//   const [bool, setBool] = useState(true);
//   useEffect(() => {
//     const timeout = setTimeout(() => setBool(!bool), 1000);
//     return () => clearTimeout(timeout);
//   }, [bool]);

//   return (
//     <>
//       <Multiple bool={bool} />
//       <Main bool={bool} />
//       <Styled bool={bool} />
//     </>
//   );
// };
