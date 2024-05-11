import { GrLinkedin } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';

import { Contact } from '@/types/content/contact';

export const CONTACTS: Contact[] = [
  {
    title: 'Linkedin',
    Icon: ({ className = '' }) => <GrLinkedin className={className} />,
    url: 'https://www.linkedin.com/in/auger-michael/',
  },
  {
    title: 'Email',
    Icon: ({ className = '' }) => <MdOutlineEmail className={className} />,
    url: 'mailto:auger.michaell@gmail.com',
  },
  {
    title: 'Resume',
    Icon: ({ className = '' }) => <FaRegFileAlt className={className} />,
    url: 'https://www.linkedin.com/in/auger-michael/',
  },
];
