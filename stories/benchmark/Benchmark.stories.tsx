import React, { useState, useEffect } from 'react';

import emotion from '@emotion/styled';
import styled from 'styled-components';

import modules from '../../packages/modules/src';
import { booleon } from '../../packages/react/src';
import benchMarkProps from './benchmarkProps';

export default {
  title: 'Benchmark',
};

const Booleon = booleon.div(...modules);
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

export const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.80448 115.59661">
    <path
      d="M 91.281251,0 C 84.005211,0 74.48011,5.18573 64.849272,14.18156 55.218441,5.23865 45.693341,0.10594 38.417291,0.10594 c 0.0259,0.0217 0.048,0.0398 0.0739,0.0615 -0.02439,-0.0114 -0.0496,-0.0239 -0.0739,-0.0351 -2.2225,0 -4.23323,0.47615 -5.97948,1.48156 C 25.00302,5.90015 23.33604,19.26151 27.172499,36.036091 10.71542,41.116091 0,49.239011 0,57.811509 c 0,8.598958 10.76844,16.748228 27.278441,21.801769 -3.810001,16.8275 -2.116361,30.215522 5.34489,34.501772 1.719789,1.00541 3.730631,1.48156 5.953131,1.48156 7.276039,0 16.800629,-5.18573 26.431459,-14.18156 9.630828,8.94291 19.15594,14.07562 26.43198,14.07562 2.2225,0 4.23323,-0.47614 5.97948,-1.48156 7.434789,-4.28625 9.101769,-17.647601 5.265309,-34.422192 16.40417,-5.053539 27.11979,-13.202909 27.11979,-21.775409 0,-8.598959 -10.76844,-16.748229 -27.27844,-21.801768 3.81,-16.827501 2.11687,-30.215521 -5.344379,-34.501771 -1.71979,-1.00542 -3.73072,-1.48157 -5.92677,-1.48157 7.4e-4,0.0125 0.0264,-0.0139 0.0264,-0.0264 z m -35.33945,31.220831 c 1.614901,0.031 3.24098,0.291168 4.831229,0.797369 1.270291,0.40435 2.309431,0.773491 2.309431,0.820111 0,0.0466 -0.988031,1.097489 -2.19574,2.335249 -3.517299,3.604861 -5.38003,8.044299 -5.405871,12.88397 l -0.01389,2.631879 -1.845882,1.30328 c -1.015187,0.716841 -2.480519,2.102538 -3.256129,3.079398 -1.50364,1.893782 -3.706241,6.14631 -3.706241,7.15564 0,0.947351 -0.715639,0.723562 -2.455659,-0.767919 C 37.74865,55.927337 36.44621,46.062101 41.22545,38.905119 44.551239,33.924711 50.17438,31.11029 55.941861,31.220831 Z m 18.447459,0.02429 c 2.962201,0.02111 5.935301,0.78717 8.515241,2.255161 3.81563,2.17111 7.25289,6.71998 8.20622,10.859291 0.49967,2.169549 0.4478,6.354109 -0.10439,8.427908 -0.9616,3.611377 -3.63891,7.521649 -6.58668,9.619559 l -1.07435,0.764818 -0.21187,-1.10898 c -0.59423,-3.11277 -3.835271,-7.83667 -6.856951,-9.994217 l -1.902208,-1.35858 v -2.52697 c 0,-4.986538 -1.763551,-9.25508 -5.389333,-13.045199 -1.176178,-1.2295 -2.138367,-2.26891 -2.138367,-2.309939 0,-0.041 1.039138,-0.404001 2.309407,-0.806673 1.682332,-0.533278 3.455951,-0.788818 5.233281,-0.776179 z m -9.465058,2.849441 c 0.29491,0 1.434478,0.88523 2.532658,1.96732 3.39041,3.340709 5.206402,7.402849 5.206402,11.646839 0,1.959491 -0.0652,2.171632 -0.598932,1.952332 -3.9315,-1.615522 -10.354379,-1.609331 -14.541738,0.01389 -0.485,0.188021 -0.59844,0.0466 -0.59635,-0.745169 0.01191,-4.517171 2.082509,-9.45609 5.323189,-12.6969 1.176128,-1.176181 2.379861,-2.13837 2.674771,-2.13837 z m 0.0444,15.848129 c 0.734848,0.009 1.484989,0.085 2.321308,0.21962 3.147269,0.506712 5.031222,1.289688 5.031222,2.091349 0,1.160899 -1.402141,4.21236 -2.893881,6.298319 -1.44182,2.016151 -3.887441,4.284501 -4.619881,4.284501 -0.2027,0 -1.353019,-0.984581 -2.55591,-2.187472 -2.10929,-2.109279 -4.212579,-5.689219 -4.771289,-8.121467 -0.196652,-0.85607 -0.0957,-0.933982 2.099101,-1.615398 2.229189,-0.6921 3.77267,-0.99038 5.38933,-0.969452 z M 55.635321,52.8283 c 0.21961,0.0177 0.337019,0.35609 0.593249,1.212329 0.819581,2.73879 2.47173,5.476031 4.658111,7.71684 1.207709,1.237769 2.19574,2.275229 2.19574,2.305799 0,0.0306 -1.03914,0.373732 -2.309431,0.76223 -2.720078,0.831922 -4.686739,1.02897 -7.278619,0.730192 -1.03923,-0.119801 -2.709921,-0.490061 -3.712951,-0.823211 -1.772891,-0.58886 -1.81797,-0.635939 -1.617469,-1.678959 0.591291,-3.076011 3.93578,-7.8907 6.91379,-9.952889 0.25717,-0.178081 0.42582,-0.282922 0.55758,-0.272331 z m 18.62419,0.003 c 0.27658,-0.0232 0.805958,0.416478 2.069119,1.585947 2.467059,2.28405 3.939691,4.463002 4.897381,7.24658 0.66471,1.932022 0.66839,2.042491 0.0868,2.468071 -1.51572,1.10917 -5.821589,1.790531 -8.999449,1.424202 -2.035562,-0.234651 -5.466871,-1.260862 -5.46685,-1.635041 0,-0.126021 0.551331,-0.66893 1.22524,-1.20664 0.67392,-0.537721 1.880921,-1.86854 2.682529,-2.957452 1.2545,-1.704117 1.820301,-2.862267 3.23959,-6.632149 0.0666,-0.176839 0.139901,-0.282979 0.26562,-0.293518 z m -9.297619,12.328959 c 0.354478,-0.01029 0.663829,0.137081 1.24075,0.433049 4.054197,2.079929 9.688999,2.237121 15.442469,0.43098 0.50146,-0.157419 0.59841,0.0336 0.59841,1.174091 0,3.793149 -1.85873,8.57205 -4.482932,11.524361 -1.9289,2.170068 -4.98017,4.132069 -7.760769,4.990909 -2.82934,0.87389 -7.35149,0.88936 -9.996799,0.0341 -2.883551,-0.93227 -4.55162,-1.907021 -6.73086,-3.93206 -3.452231,-3.20797 -5.586741,-7.838491 -5.586741,-12.11916 0,-1.73926 0.037,-1.815021 0.76998,-1.58078 5.400299,1.725829 10.42852,1.577599 14.994951,-0.442352 0.75714,-0.33492 1.157049,-0.502798 1.511541,-0.513148 z"
      fill="#d55901"
    />
  </svg>
);

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
      <Booleon {...flexProps(bool)}>booleon</Booleon>
      <Emotion {...flexProps(bool)}>emotion</Emotion>
      <Styled {...flexProps(bool)}>styled</Styled>
    </div>
  );
};

export const X = () => {
  return <Booleon bg_var_color_blue>booleon</Booleon>;
};
