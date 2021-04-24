import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { MDXProvider } from '@mdx-js/react';

const Heading = (As: any) => ({ children, ...props }: any) => (
  <As id={children} {...props} style={{ paddingTop: 100, marginTop: -100 }}>
    {children}
  </As>
);

const __Div = booleon.div(modules);
const __Pre = booleon.pre(modules);
const __Hr = booleon.hr(modules);
function MDX({ children }: any) {
  return (
    <MDXProvider
      components={{
        h1: Heading('h1'),
        h2: Heading('h2'),
        h3: Heading('h3'),
        h4: Heading('h4'),
        h5: Heading('h5'),
        h6: Heading('h6'),
        hr: () => <__Hr bd_1_solid_d55901 />,
        ul: ({ children }) => (
          <ul style={{ margin: 0, padding: 0 }}>{children}</ul>
        ),
        li: ({ children }) => (
          <li style={{ margin: 0, padding: 0 }}>{children}</li>
        ),
        pre: ({ children, ...props }) => (
          <__Div sd_2 dark__sd_4 mb_20 bd_radius_10 child__bd_radius_10>
            <__Pre {...props} m_0>
              {children}
            </__Pre>
          </__Div>
        ),
      }}>
      {children}
    </MDXProvider>
  );
}

export default MDX;
