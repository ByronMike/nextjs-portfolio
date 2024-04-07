'use client';

import clsx from 'clsx';
import { highlightAll } from 'prismjs';
import { Fragment, FunctionComponent, useCallback, useEffect } from 'react';

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
  language,
  code,
  className,
}) => {
  const loadDependencies = useCallback(async () => {
    highlightAll();
  }, []);

  useEffect(() => {
    loadDependencies();
  }, [language, loadDependencies]);

  return (
    <pre className={clsx(`language-${language}`, className)} tabIndex={-1}>
      {(Array.isArray(code) ? code : [code]).map((code, index) => {
        return (
          <Fragment key={index}>
            <code
              className={`language-${language}`}
              data-selected-index={index}
            >
              {code}
            </code>
            {`\n`}
          </Fragment>
        );
      })}
    </pre>
  );
};
