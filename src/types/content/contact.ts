export type IconProps = {
  className?: string;
};

export interface Contact {
  title: string;
  Icon: React.FunctionComponent<{ className?: string }>;
  url: string;
}
