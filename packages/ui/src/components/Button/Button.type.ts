import { ReactNode } from 'react';

export type ButtonRef = HTMLButtonElement;
export type ButtonProps = {
  primary?: boolean;
  outlined?: boolean;
  children: ReactNode;
};
