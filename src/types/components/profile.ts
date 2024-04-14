export interface ProfileProps {
  profile_image_url: string;
  name: string;
  username: string;
  description: string;
  public_metrics: {
    following_count: number;
    followers_count: number;
  };
}
