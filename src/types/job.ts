export type JobProps = {
  title: string;
  company: string;
  location: string;
  description: string;
  startDate: string;
  endDate?: string;
  list: string[];
  technologies: string[];
  currentJob?: boolean;
};
