import {
  BackgroundProps,
  BorderProps,
  ContainerProps,
  GridProps,
  MarginProps,
  PaddingProps,
  ShadowProps,
  SizingProps
} from '../css';

export type ViewProps =
& BorderProps 
& BackgroundProps 
& SizingProps 
& MarginProps 
& PaddingProps 
& ShadowProps
& ContainerProps
& GridProps;
