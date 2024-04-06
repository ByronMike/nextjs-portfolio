import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProfileProps {
  profile_image_url: string;
  name: string;
  username: string;
  description: string;
  public_metrics: {
    following_count: number;
    followers_count: number;
  };
}

export const Profile: FunctionComponent<ProfileProps> = ({
  profile_image_url,
  name,
  username,
  description,
  public_metrics,
}) => {
  return (
    <section className="animate-float spacing-2 d:bg-gray-800 max-w-xs rounded-lg border-2 border-gray-400/30 bg-white/90 p-4 backdrop-blur-md will-change-transform lg:bg-white/80">
      <div className="flex gap-4">
        <figure className="overflow-hidden rounded-full border-2 border-gray-400/50">
          <Image
            width={40}
            height={40}
            src={profile_image_url}
            alt={name}
            className="border-accent rounded-full border-2"
          />
        </figure>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide">{name}</h2>
          <h3 className="d:text-gray-300/90 text-sm tracking-tight text-gray-500">
            @{username}
          </h3>
        </div>
        <Link
          target="_blank"
          href={`https://twitter.com/${username}`}
          className="butter-border hfa:bg-sky-600/80 d:bg-sky-600/90 d:hfa:bg-sky-500/80 my-auto ml-auto flex items-center justify-center rounded-full bg-sky-500/90 px-4 py-1.5 text-xs text-white transition-colors"
        >
          Follow
        </Link>
      </div>
      <div>
        <p className="d:text-gray-300/90 line-clamp-3 pr-2 text-[13px] tracking-tight text-gray-500/90">
          {description}
        </p>
      </div>
      <div>
        <p className="d:text-gray-300/90 text-[13px] text-gray-500">
          <span className="d:text-gray-200 font-semibold text-gray-600">
            {public_metrics?.following_count}
          </span>{' '}
          Following{' '}
          <span className="d:text-gray-200 ml-2 font-semibold text-gray-600">
            {public_metrics?.followers_count}
          </span>{' '}
          Followers
        </p>
      </div>
    </section>
  );
};
