export type IconProps = {
  className?: string;
};

export interface Technology {
  name: string;
  Icon: React.FunctionComponent<IconProps>;
}
