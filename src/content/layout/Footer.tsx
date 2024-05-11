import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiSpotify } from 'react-icons/si';

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Michael Auger. Tous droits réservés.`,
  socialAccount: {
    github: {
      name: 'GitHub',
      href: 'https://github.com/byronmike/',
      Icon: ({ className = '' }) => <SiGithub className={className} />,
    },

    twitter: {
      name: 'Twitter',
      href: 'https://twitter.com/ByronMike_',
      Icon: ({ className = '' }) => <SiTwitter className={className} />,
    },
    linkedin: {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/auger-michael/',
      Icon: ({ className = '' }) => <SiLinkedin className={className} />,
    },
    spotify: {
      name: 'Spotify',
      href: 'https://open.spotify.com/playlist/2bTY4IUI6BEcOU1GmLlLrP',
      Icon: ({ className = '' }) => <SiSpotify className={className} />,
    },
  },
};
