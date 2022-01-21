
import { Duration } from './global';
export interface Call {
  avgResponseTime: number;
  cpm: number;
  isAlert: boolean;
  source: string | any;
  target: string | any;
  id: string;
  detectPoints: string[];
  type?: string;
  sourceObj?: any;
}
export interface Node {
  apdex: number;
  avgResponseTime: number;
  cpm: number;
  id: string;
  isAlarm: boolean;
  name: string;
  numOfServer: number;
  numOfServerAlarm: number;
  numOfServiceAlarm: number;
  sla: number;
  type: string;
}

export interface EndpointDependencyConidition {
  serviceName: string;
  serviceId: string;
  endpointName: string;
  endpointId: string;
  destServiceName: string;
  destEndpointName: string;
  destServiceId: string;
  destEndpointId: string;
  duration: Duration;
}
