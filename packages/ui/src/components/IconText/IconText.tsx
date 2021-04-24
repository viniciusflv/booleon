import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const __Div = booleon.div(modules);
const __Span = booleon.span(modules);
function IconText({ first, last, children, ...props }: any) {
  return (
    <__Div {...props}>
      {first}
      <__Span>{children}</__Span>
      {last}
    </__Div>
  );
}

export default IconText;
