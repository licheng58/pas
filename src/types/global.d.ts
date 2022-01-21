

export interface Option {
  key: string;
  label: string;
}
export interface Duration {
  start: Date;
  end: Date;
  step: string;
}
export interface DurationTime {
  start: string;
  end: string;
  step: string;
}
export interface SlowItem {
  key: string;
  label: string;
  value: number;
}
