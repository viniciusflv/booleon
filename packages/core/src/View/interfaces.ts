import {
  BackgroundProps,
  BorderProps,
  ContainerProps,
  FlexProps,
  GridProps,
  MarginProps,
  PaddingProps,
  ShadowProps,
  SizingProps,
  TransformProps,
  TransitionProps
} from '../css';

export type ViewProps =
& TransformProps
& BorderProps 
& BackgroundProps 
& SizingProps 
& MarginProps 
& PaddingProps 
& ShadowProps
& ContainerProps
& GridProps
& FlexProps
& TransitionProps;
