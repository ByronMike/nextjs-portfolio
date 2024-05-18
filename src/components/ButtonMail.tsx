import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ButtonMailProps } from '@/types/components/buttonMail';

const ButtonMail: FunctionComponent<ButtonMailProps> = ({ mailto, label }) => {
  return (
    <Link
      href={mailto}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className="button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-gray-500 md:flex"
    >
      {label}
    </Link>
  );
};

export default ButtonMail;
