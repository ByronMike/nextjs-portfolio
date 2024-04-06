'use client';

import React, { FunctionComponent, Fragment, useEffect } from 'react';
import clsx from 'clsx';
import { highlightAll } from 'prismjs';
import 'prism-themes/themes/prism-holi-theme.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export type CodeGroupProps = {
  code: string | string[];
  language: 'jsx';
  className?: string;
};

export const Code: FunctionComponent<CodeGroupProps> = ({
  code,
  language,
  className,
}) => {
  useEffect(() => {
    highlightAll();
  }, []);

  return (
    <pre className={clsx(`language-${language}`, className)} tabIndex={-1}>
      {(Array.isArray(code) ? code : [code]).map((codeBlock, index) => (
        <Fragment key={index}>
          <code className={`language-${language}`}>{codeBlock}</code>
          {'\n'}
        </Fragment>
      ))}
    </pre>
  );
};
