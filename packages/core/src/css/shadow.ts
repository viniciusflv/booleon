import { shadow } from '../lib/utils';

export const shadowTuple = [
  ['sd_1', () => `box-shadow:${shadow(1)};`],
  ['sd_2', () => `box-shadow:${shadow(2)};`],
  ['sd_3', () => `box-shadow:${shadow(3)};`],
  ['sd_4', () => `box-shadow:${shadow(4)};`],
  ['sd_6', () => `box-shadow:${shadow(6)};`],
  ['sd_8', () => `box-shadow:${shadow(8)};`],
  ['sd_9', () => `box-shadow:${shadow(9)};`],
  ['sd_12', () => `box-shadow:${shadow(12)};`],
  ['sd_16', () => `box-shadow:${shadow(16)};`],
  ['sd_24', () => `box-shadow:${shadow(24)};`],
  ['sdi_1', () => `box-shadow:${shadow(1, true)};`],
  ['sdi_2', () => `box-shadow:${shadow(2, true)};`],
  ['sdi_3', () => `box-shadow:${shadow(3, true)};`],
  ['sdi_4', () => `box-shadow:${shadow(4, true)};`],
  ['sdi_6', () => `box-shadow:${shadow(6, true)};`],
  ['sdi_8', () => `box-shadow:${shadow(8, true)};`],
  ['sdi_9', () => `box-shadow:${shadow(9, true)};`],
  ['sdi_12', () => `box-shadow:${shadow(12, true)};`],
  ['sdi_16', () => `box-shadow:${shadow(16, true)};`],
  ['sdi_24', () => `box-shadow:${shadow(24, true)};`],
] as const;
