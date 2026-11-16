import { GrLinkedin } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegFileAlt, FaGithub } from 'react-icons/fa';

import { Contact } from '@/types/content/contact';

export const CONTACTS: Contact[] = [
  {
    title: 'Email',
    Icon: ({ className = '' }) => <MdOutlineEmail className={className} />,
    url: 'mailto:auger.michaell@gmail.com',
  },
  {
    title: 'Linkedin',
    Icon: ({ className = '' }) => <GrLinkedin className={className} />,
    url: 'https://www.linkedin.com/in/auger-michael/',
  },
  {
    title: 'GitHub',
    Icon: ({ className = '' }) => <FaGithub className={className} />,
    url: 'https://github.com/ByronMike',
  },
  {
    title: 'Resume',
    Icon: ({ className = '' }) => <FaRegFileAlt className={className} />,
    url: '/documents/cv.pdf',
  },
];
