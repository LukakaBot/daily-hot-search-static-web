export type ResultStatus = '403' | '404' | '418' | '500';

export interface AppResultProps {
  status: ResultStatus;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  default?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface StatusIconProps {
  status: ResultStatus;
}