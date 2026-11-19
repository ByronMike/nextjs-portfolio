import { GrLinkedin } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegFileAlt, FaGithub } from 'react-icons/fa';

export type ContactKey = 'email' | 'linkedin' | 'github' | 'resume';

// Locale-invariant contact links. Labels live in messages under
// `contact.links.<key>`. The `resume` url is resolved per locale in the
// component (FR cv.pdf / EN cv-en.pdf).
export const CONTACTS: {
  key: ContactKey;
  Icon: React.FunctionComponent<{ className?: string }>;
  url?: string;
}[] = [
  {
    key: 'email',
    Icon: ({ className = '' }) => <MdOutlineEmail className={className} />,
    url: 'mailto:auger.michaell@gmail.com',
  },
  {
    key: 'linkedin',
    Icon: ({ className = '' }) => <GrLinkedin className={className} />,
    url: 'https://www.linkedin.com/in/auger-michael/',
  },
  {
    key: 'github',
    Icon: ({ className = '' }) => <FaGithub className={className} />,
    url: 'https://github.com/ByronMike',
  },
  {
    key: 'resume',
    Icon: ({ className = '' }) => <FaRegFileAlt className={className} />,
  },
];
