import { Code, CodeGroupProps } from '@/components/typography/code';

export const CodeEditor = ({
  code,
  language,
}: {
  code: string | string[];
  language: CodeGroupProps['language'];
}) => {
  return (
    <figure className="d:border-gray-600/40 relative w-full flex-col overflow-hidden rounded-md border-2 border-gray-200/40 bg-gray-900 p-2.5 shadow-2xl drop-shadow-lg">
      <div
        className="mb-2 grid items-center border-b border-b-gray-800 pb-2"
        style={{ gridTemplateColumns: '50px 1fr 50px' }}
      >
        <i className="flex gap-1.5">
          <button
            tabIndex={-1}
            aria-hidden
            className="h:bg-[#EC6A5F] h-3 w-3 rounded-full bg-gray-700 transition-colors"
          />
          <button
            tabIndex={-1}
            aria-hidden
            className="h:bg-[#F4BF50] h-3 w-3 rounded-full bg-gray-700 transition-colors"
          />
          <button
            tabIndex={-1}
            aria-hidden
            className="h:bg-[#61C454] h-3 w-3 rounded-full bg-gray-700 transition-colors"
          />
        </i>
        <div className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500">
          /index.tsx
        </div>
      </div>
      <div className=" b:pointer-events-none b:bottom-0 b:z-10  b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-gray-900 relative h-[calc(100%-37px)] overflow-hidden before:absolute">
        <div className="sm:scrollbar-none relative">
          <Code className="text-[13px]" code={code} language={language} />
        </div>
      </div>
    </figure>
  );
};
