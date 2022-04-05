import { Snippet } from '.';
import { Default as Toggle } from '../Toggle/Toggle.stories';

export default {
  title: 'Components/Snippet',
  component: Snippet,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export const Default = () => (
  <>
    <div style={{ position: 'fixed', right: 12, top: 12 }}>
      <Toggle />
    </div>
    <Snippet>
      <pre className="language-tsx line-numbers">
        <code className="language-tsx">
          <span className="token keyword">const</span> regex{' '}
          <span className="token operator">=</span>{' '}
          <span className="token regex">
            <span className="token regex-delimiter">/</span>
            <span className="token regex-source language-regex">\d1.*</span>
            <span className="token regex-delimiter">/</span>
            <span className="token regex-flags">g</span>
          </span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">type</span>{' '}
          <span className="token class-name">Type</span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token builtin">any</span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span>{' '}
          <span className="token function-variable function">
            arrowFunction
          </span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token punctuation">(</span>
          <span className="token punctuation">{'{'}</span> blue{' '}
          <span className="token punctuation">{'}'}</span>
          <span className="token operator">:</span> Type
          <span className="token punctuation">)</span>{' '}
          <span className="token operator">=&gt;</span>{' '}
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
          {'\n'}
          <span className="token comment">
            /**{'\n'} * comment{'\n'} * @example example{'\n'} */
          </span>
          {'\n'}
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
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span> regex{' '}
          <span className="token operator">=</span>{' '}
          <span className="token regex">
            <span className="token regex-delimiter">/</span>
            <span className="token regex-source language-regex">\d1.*</span>
            <span className="token regex-delimiter">/</span>
            <span className="token regex-flags">g</span>
          </span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">type</span>{' '}
          <span className="token class-name">Type</span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token builtin">any</span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span>{' '}
          <span className="token function-variable function">
            arrowFunction
          </span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token punctuation">(</span>
          <span className="token punctuation">{'{'}</span> blue{' '}
          <span className="token punctuation">{'}'}</span>
          <span className="token operator">:</span> Type
          <span className="token punctuation">)</span>{' '}
          <span className="token operator">=&gt;</span>{' '}
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
          {'\n'}
          <span className="token comment">
            /**{'\n'} * comment{'\n'} * @example example{'\n'} */
          </span>
          {'\n'}
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
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span> regex{' '}
          <span className="token operator">=</span>{' '}
          <span className="token regex">
            <span className="token regex-delimiter">/</span>
            <span className="token regex-source language-regex">\d1.*</span>
            <span className="token regex-delimiter">/</span>
            <span className="token regex-flags">g</span>
          </span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">type</span>{' '}
          <span className="token class-name">Type</span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token builtin">any</span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span>{' '}
          <span className="token function-variable function">
            arrowFunction
          </span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token punctuation">(</span>
          <span className="token punctuation">{'{'}</span> blue{' '}
          <span className="token punctuation">{'}'}</span>
          <span className="token operator">:</span> Type
          <span className="token punctuation">)</span>{' '}
          <span className="token operator">=&gt;</span>{' '}
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
          {'\n'}
          <span className="token comment">
            /**{'\n'} * comment{'\n'} * @example example{'\n'} */
          </span>
          {'\n'}
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
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span> regex{' '}
          <span className="token operator">=</span>{' '}
          <span className="token regex">
            <span className="token regex-delimiter">/</span>
            <span className="token regex-source language-regex">\d1.*</span>
            <span className="token regex-delimiter">/</span>
            <span className="token regex-flags">g</span>
          </span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">type</span>{' '}
          <span className="token class-name">Type</span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token builtin">any</span>
          <span className="token punctuation">;</span>
          {'\n'}
          {'\n'}
          <span className="token keyword">const</span>{' '}
          <span className="token function-variable function">
            arrowFunction
          </span>{' '}
          <span className="token operator">=</span>{' '}
          <span className="token punctuation">(</span>
          <span className="token punctuation">{'{'}</span> blue{' '}
          <span className="token punctuation">{'}'}</span>
          <span className="token operator">:</span> Type
          <span className="token punctuation">)</span>{' '}
          <span className="token operator">=&gt;</span>{' '}
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
          {'\n'}
          <span className="token comment">
            /**{'\n'} * comment{'\n'} * @example example{'\n'} */
          </span>
          {'\n'}
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
        <span
          aria-hidden="true"
          className="line-numbers-rows"
          style={{ 'white-space': 'normal', width: 'auto', left: '0px' }}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
      </pre>
    </Snippet>
  </>
);
