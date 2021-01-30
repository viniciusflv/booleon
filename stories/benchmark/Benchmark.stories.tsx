import React, { useState, useEffect } from 'react';

import emotion from '@emotion/styled';
import styled from 'styled-components';

import modules, { flex } from '../../packages/modules/src';
import { booleon } from '../../packages/react/src';
import benchMarkProps from './benchmarkProps';

export default {
  title: 'Benchmark',
};

const Booleon = booleon.div(modules);
const BooleonFlex = booleon.div(flex);
const Emotion = emotion.div<any>`
  ${({ flex }) => flex && 'display:flex;'}
  ${({ grow }) => grow && 'flex-grow:1;'}
  ${({ col }) => col && 'flex-direction:column;'}
  ${({ row }) => row && 'flex-direction:row;'}
  ${({ row_reverse }) => row_reverse && 'flex-direction:row-reverse;'}
  ${({ col_reverse }) => col_reverse && 'flex-direction:column-reverse;'}
  ${({ main_between }) => main_between && 'justify-content:space-between;'}
  ${({ main_around }) => main_around && 'justify-content:space-around;'}
  ${({ main_evenly }) => main_evenly && 'justify-content:space-evenly;'}
  ${({ main_center }) => main_center && 'justify-content:center;'}
  ${({ cross_center }) => cross_center && 'align-items:center;'}
  ${({ main_stretch }) => main_stretch && 'justify-content:stretch;'}
  ${({ cross_stretch }) => cross_stretch && 'align-items:stretch;'}
  ${({ main_start }) => main_start && 'justify-content:flex-start;'}
  ${({ cross_start }) => cross_start && 'align-items:flex-start;'}
  ${({ main_end }) => main_end && 'justify-content:flex-end;'}
  ${({ cross_end }) => cross_end && 'align-items:flex-end;'}
`;
const Styled = styled.div<any>`
  ${({ flex }) => flex && 'display:flex;'}
  ${({ grow }) => grow && 'flex-grow:1;'}
  ${({ col }) => col && 'flex-direction:column;'}
  ${({ row }) => row && 'flex-direction:row;'}
  ${({ row_reverse }) => row_reverse && 'flex-direction:row-reverse;'}
  ${({ col_reverse }) => col_reverse && 'flex-direction:column-reverse;'}
  ${({ main_between }) => main_between && 'justify-content:space-between;'}
  ${({ main_around }) => main_around && 'justify-content:space-around;'}
  ${({ main_evenly }) => main_evenly && 'justify-content:space-evenly;'}
  ${({ main_center }) => main_center && 'justify-content:center;'}
  ${({ cross_center }) => cross_center && 'align-items:center;'}
  ${({ main_stretch }) => main_stretch && 'justify-content:stretch;'}
  ${({ cross_stretch }) => cross_stretch && 'align-items:stretch;'}
  ${({ main_start }) => main_start && 'justify-content:flex-start;'}
  ${({ cross_start }) => cross_start && 'align-items:flex-start;'}
  ${({ main_end }) => main_end && 'justify-content:flex-end;'}
  ${({ cross_end }) => cross_end && 'align-items:flex-end;'}
`;

const flexProps = (bool) => ({
  flex: bool,
  grow: bool,
  col: bool,
  row: bool,
  row_reverse: bool,
  col_reverse: bool,
  main_between: bool,
  main_around: bool,
  main_evenly: bool,
  main_center: bool,
  cross_center: bool,
  main_stretch: bool,
  cross_stretch: bool,
  main_start: bool,
  cross_start: bool,
  main_end: bool,
  cross_end: bool,
});

export const AllProps = () => {
  const [bool, setBool] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBool((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Booleon {...benchMarkProps(bool)}>booleon</Booleon>
    </div>
  );
};

export const Comparisons = () => {
  const [bool, setBool] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBool((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BooleonFlex {...flexProps(bool)}>booleon</BooleonFlex>
      <Emotion {...flexProps(bool)}>emotion</Emotion>
      <Styled {...flexProps(bool)}>styled</Styled>
    </div>
  );
};
