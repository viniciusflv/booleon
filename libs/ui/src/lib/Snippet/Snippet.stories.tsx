import { Snippet } from '.';

export default {
  title: 'Components/Snippet',
  component: Snippet,
};

export const Default = () => (
  <Snippet>
    <div className="gatsby-highlight" data-language="tsx">
      <pre className="language-tsx">
        <code className="language-tsx">
          <span className="token keyword">function</span>{' '}
          <span className="token function">FunctionComponent</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">{'{'}</span> blue{' '}
          <span className="token punctuation">{'}'}</span>
          <span className="token operator">:</span>{' '}
          <span className="token builtin">any</span>
          <span className="token punctuation">)</span>{' '}
          <span className="token punctuation">{'{'}</span>
          {'\n'}
          {'  '}
          <span className="token keyword">return</span>{' '}
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>
              <span className="token class-name">Component</span>
            </span>{' '}
            <span className="token attr-name">color</span>
            <span className="token script language-javascript">
              <span className="token script-punctuation punctuation">=</span>
              <span className="token punctuation">{'{'}</span>blue
              <span className="token punctuation">{'}'}</span>
            </span>{' '}
            <span className="token punctuation">/&gt;</span>
          </span>
          <span className="token punctuation">;</span>
          {'\n'}
          <span className="token punctuation">{'}'}</span>
        </code>
      </pre>
    </div>
  </Snippet>
);
