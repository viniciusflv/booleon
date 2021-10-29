import type {
  Attachments,
  BooleonModule,
  BooleonProps,
} from './packages/core/src/types';
import { booleon } from './packages/react/src';

const fn = <M extends BooleonModule, A extends Attachments>(
  m: M,
  a?: A,
): BooleonProps<M, A> => {
  return {} as any;
};

const { att__flex, active__flex } = fn({ flex: () => '' }, { att: (_) => '' });

console.log({ att__flex, active__flex });

const MyComponent = booleon.div(
  {
    flex: () => 'display:flex;',
  },
  { att: (_) => '' },
);

function Comp() {
  return <MyComponent att__flex />;
}
