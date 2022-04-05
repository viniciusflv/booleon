import { Mermaid, Snippet } from '@booleon/ui';

import { MDXProvider } from '@mdx-js/react';

export function MDX({ children }: any) {
  return (
    <MDXProvider
      components={{
        pre: Snippet,
        div: ({ className, ...props }) =>
          className === 'mermaid' ? (
            <Mermaid className={className} {...props} />
          ) : (
            <div className={className} {...props} />
          ),
      }}
    >
      {children}
    </MDXProvider>
  );
}
