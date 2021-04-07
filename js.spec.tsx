import React from 'react';

import { performance } from 'perf_hooks';

import { composeProps } from './packages/core/src/lib/composeProps';
import { stringHash } from './packages/core/src/lib/stringHash';
import { styleCompiler } from './packages/core/src/lib/styleCompiler';
import modules from './packages/modules/src/lib/index';

const booleonProps = {
  md__dark__checked_focus__flex: true,
  md__dark__checked_focus__cross_center: true,
  md__dark__kf_animation__from__flex: true,
  md__dark__kf_animation__to__flex: true,
  // light__flex: true,
  // dark__flex: true,
  // xs__flex: true,
  // xs__checked_checked__cross_center: true,
  // xs__checked_checked__kf_animation__from__flex: true,
  // xs__checked_checked__kf_animation__half__cross_center: true,
  // xs__checked_checked__kf_animation__to__flex: true,
  // md__flex: true,
  // md__cross_center: true,
  // checked__flex: true,
  // checked_checked__cross_center: true,
  // flex: true,
  // cross_center: true,
  // kf_animation__from__flex: true,
  // kf_animation__from__cross_center: true,
  // kf_animation__to__flex: true,
  // focus__checked__cross_center: true,
  // focus__flex: true,
  // flex: true,
  // fl_blur_1rem: true,
  // fl_brightness_100: true,
  // fl_contrast_100$: true,
  // fl_grayscale_100$: true,
  // fl_hue_10deg: true,
  // fl_opacity_10$: true,
  // fl_saturate_1000: true,
  // fl_sepia_10$: true,
  // fl_sd_1: true,
  fl_invert: true,
  // flex: true,
  // cross_center: true,
};

function perfCb(cb) {
  const t0 = performance.now();
  const result = cb();
  const t1 = performance.now();
  return [t1 - t0, result];
}

test('aaa', () => {
  const hash = stringHash(
    Object.keys(booleonProps).reduce(
      (acc, k) => (booleonProps[k] ? (acc += k) : acc),
      '',
    ),
  );

  const [pf] = perfCb(() => {
    const composedProps = composeProps(booleonProps);
    console.log(JSON.stringify(composedProps, undefined, 2));
    const styles = styleCompiler(hash, composedProps, modules);
    console.log(styles);
  });

  const C = () => {
    return (
      <div
        md__dark__checked_focus__flex
        md__dark__checked_focus__cross_center
        md__dark__kf_animation__to__flex
        md__dark__kf_animation__to__cross_center
      />
    );
  };

  console.log(pf);
});
