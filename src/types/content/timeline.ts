export interface TIMELINEOBJECTTYPE {
  [year: string]: {
    date: string;
    heading: string;
    description: string;
    Icon: React.FunctionComponent<{ className?: string }>;
  }[];
}
