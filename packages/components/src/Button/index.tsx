import { ButtonProps } from './interfaces';
import React, { FC, Suspense, lazy } from 'react';

const ButtonComponent = lazy(() => import('./component'));

export const Button: FC<ButtonProps> = (props) => (
  <Suspense fallback={<button />}>
    <ButtonComponent {...props} />
  </Suspense>
);
