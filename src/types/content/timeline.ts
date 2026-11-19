export interface Timeline {
  [year: string]: {
    id: string;
    date: string;
    Icon: React.FunctionComponent<{ className?: string }>;
  }[];
}
