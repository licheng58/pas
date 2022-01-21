
import { Duration } from './global';
export interface Value {
  value: number;
}

export interface CompsContainer {
  service: CompsItem[];
  database: CompsItem[];
  proxy: CompsItem[];
}
export interface CompsItem {
  o: string;
  comp: string;
  n: string;
  t: string;
  type?: string;
  width: number;
  entityType: string;
  height: number;
}
export interface CompsGroup {
  name: string;
  children: CompsItem[];
}

export interface CompsTree {
  name?: string;
  serviceGroup?: string;
  type: string;
  query: any;
  children: any;
}

interface Fragment {
  fragment: string;
  variable: string;
}
export enum TemplateType {
  DASHBOARD,
  TOPOLOGY_SERVICE,
  TOPOLOGY_INSTANCE,
  TOPOLOGY_ENDPOINT,
  TOPOLOGY_SERVICE_RELATION,
  TOPOLOGY_SERVICE_INSTANCE_RELATION,
}

export interface DashboardTemplate {
  name: string;
  type: TemplateType;
  configuration: string;
  activated: boolean;
  disabled: boolean;
}

export interface QueryEventCondition {
  uuid: string;
  source: SourceInput;
  name: string;
  type: EventType;
  time: Duration;
  order: string;
  paging: { pageNum: number; pageSize: number; needTotal: boolean };
}

type SourceInput = {
  service: String;
  serviceInstance: String;
  endpoint: String;
};
export enum EventType {
  Normal,
  Error,
}

export type Event = {
  uuid: string;
  source: SourceInput;
  name: string;
  type: string;
  message: string;
  parameters: { key: string; value: string }[];
  startTime: number | string;
  endTime: number | string;
  entityType?: string;
  checked?: boolean;
  scope?: string;
};
