import { ReactNode } from 'react';

export type DropRef = HTMLDivElement;
export type DropProps = {
  click?: boolean;
  open?: boolean;
  children: ReactNode;
};
