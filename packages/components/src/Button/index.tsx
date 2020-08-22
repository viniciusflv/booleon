import React, { FC, Suspense, lazy } from 'react';
import { ButtonProps } from './interfaces';

const ButtonComponent = lazy(() => import('./component'));

export const Button: FC<ButtonProps> = (props) => (
  <Suspense fallback={<button />}>
    <ButtonComponent {...props} />
  </Suspense>
);
