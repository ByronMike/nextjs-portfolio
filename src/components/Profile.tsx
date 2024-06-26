import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ProfileProps } from '@/types/components/profile';

const Profile: FunctionComponent<ProfileProps> = ({
  profile_image_url,
  name,
  username,
  description,
  public_metrics,
}) => {
  return (
    <section className="spacing-2 absolute left-[352px] w-[100%] max-w-xs animate-float rounded-lg border-2 border-gray-400/30 bg-white/90 p-4 backdrop-blur-md will-change-transform d:bg-gray-800 lg:relative lg:left-0  lg:top-[65px] lg:bg-white/80 ">
      <div className="flex gap-4">
        <figure className="overflow-hidden rounded-full border-2 border-gray-400/50">
          <Image
            width={40}
            height={40}
            src={profile_image_url}
            alt={name}
            className="rounded-full border-2 border-accent"
          />
        </figure>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide">{name}</h2>
          <h3 className="text-sm tracking-tight text-gray-500 d:text-gray-300/90">
            @{username}
          </h3>
        </div>
        <Link
          target="_blank"
          href={`https://github.com/${username}`}
          className="butter-border my-auto ml-auto flex items-center justify-center rounded-full bg-sky-500/90 px-4 py-1.5 text-xs text-white transition-colors hfa:bg-sky-600/80 d:bg-sky-600/90 d:hfa:bg-sky-500/80"
        >
          Follow
        </Link>
      </div>
      <div>
        <p className="line-clamp-3 pr-2 text-[13px] tracking-tight text-gray-500/90 d:text-gray-300/90">
          {description}
        </p>
      </div>
      <div>
        <p className="text-[13px] text-gray-500 d:text-gray-300/90">
          <span className="font-semibold text-gray-600 d:text-gray-200">
            {public_metrics?.following_count}
          </span>{' '}
          Following{' '}
          <span className="ml-2 font-semibold text-gray-600 d:text-gray-200">
            {public_metrics?.followers_count}
          </span>{' '}
          Followers
        </p>
      </div>
    </section>
  );
};

export default Profile;
