'use client';

import clsx from 'clsx';
import Prism from 'prismjs';
import { FunctionComponent, useEffect } from 'react';

// import 'prism-themes/themes/prism-holi-theme.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export type CodeGroupProps = {
  code: string | string[];
  language: 'tsx';
  className?: string;
};

const Code: FunctionComponent<CodeGroupProps> = ({
  language,
  code,
  className,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={clsx(`language-${language}`, className)} tabIndex={-1}>
      {(Array.isArray(code) ? code : [code]).map(
        (e: string | string[], index: number) => (
          <code key={index} className={`language-${language}`}>
            {typeof e === 'string' ? e : e.join('\n')}
          </code>
        )
      )}
    </pre>
  );
};

export default Code;
