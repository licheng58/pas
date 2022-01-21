
export type IOption = {
  key: string | number;
  label: string;
  param?: string;
};
export interface ITaskOptions {
  service: IOption;
  endpointName: string;
  monitorDuration: IOption;
  monitorTime: IOption;
  minThreshold: number;
  dumpPeriod: IOption;
  maxSamplingCount: IOption;
}
export interface TaskSourceType {
  serviceSource: IOption[];
  monitorTimeCn: IOption[];
  monitorTimeEn: IOption[];
  monitorDuration: IOption[];
  dumpPeriod: IOption[];
  maxSamplingCount: IOption[];
}

export interface TaskListSourceType {
  endpointName: string;
  startTime: string;
  duration: string;
  notified: any;
}

export interface TracesSourceType {
  endpointName: string;
  startTime: string;
  duration: string;
}

export interface IHeaderSource {
  serviceSource: IOption[];
  currentService: IOption;
  endpointName: string;
}

export interface TaskListItem {
  dumpPeriod?: number;
  duration?: number;
  endpointName?: string;
  id: string;
  logs: TaskLog[];
  maxSamplingCount?: number;
  minDurationThreshold?: number;
  serviceId?: string;
  startTime?: number;
}

export interface TaskLog {
  id: string;
  instanceId: string;
  instanceName: string;
  operationTime: number;
  operationType: string;
}
