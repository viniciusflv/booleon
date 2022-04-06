import { Mermaid, Snippet, Text } from '@booleon/ui';

import { MDXProvider } from '@mdx-js/react';

export function MDX({ children }: any) {
  return (
    <MDXProvider
      components={{
        p: (props) => <Text {...props} ft_size_sm />,
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
