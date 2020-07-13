import {
  BackgroundProps,
  BorderProps,
  ContainerProps,
  CursorProps,
  FlexProps,
  GridProps,
  MarginProps,
  OutlineProps,
  PaddingProps,
  ShadowProps,
  SizingProps,
  TransformProps,
  TransitionProps
} from '../css';

export type ViewProps =
& OutlineProps
& CursorProps
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
