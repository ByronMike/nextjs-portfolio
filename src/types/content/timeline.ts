export interface Timeline {
  [year: string]: {
    date: string;
    heading: string;
    description: string;
    Icon: React.FunctionComponent<{ className?: string }>;
  }[];
}
