import {
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  filterCss,
  flexCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss,
  BackgroundProps,
  BorderProps,
  ContainerProps,
  CursorProps,
  FilterProps,
  FlexProps,
  GradientProps,
  GridProps,
  MarginProps,
  OutlineProps,
  PaddingProps,
  ShadowProps,
  TransformProps,
  SizingProps,
  TransitionProps,
} from '../css';
import { booleon } from '../lib/booleon';

const tags = ['div', 'section'] as const;

export const View = booleon<
  typeof tags,
  & BackgroundProps
  & BorderProps
  & ContainerProps
  & CursorProps
  & FilterProps
  & FlexProps
  & GradientProps
  & GridProps
  & MarginProps
  & OutlineProps
  & PaddingProps
  & ShadowProps
  & SizingProps
  & TransformProps
  & TransitionProps
>(
  tags,
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  filterCss,
  flexCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss,
);
