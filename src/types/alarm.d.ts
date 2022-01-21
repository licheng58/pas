

export interface AlarmParams {
  paging: number;
  type: string;
}

export interface Alarm {
  message: string;
  key: string;
  startTime: string;
  scope: string;
  tags: Array<{ key: string; value: string }>;
  events: any[];
}

export interface Event {
  endTime: number;
  startTime: number;
  type: string;
  name: string;
  message: string;
  uuid: string;
  source: Source;
}

export interface Source {
  service?: string;
  endpoint?: string;
  serviceInstance?: string;
}
