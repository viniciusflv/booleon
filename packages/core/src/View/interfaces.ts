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
  TransitionProps
} from '../css';

export type ViewProps =
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
