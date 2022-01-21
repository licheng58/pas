

export interface Trace {
  duration: number;
  isError: boolean;
  key: string;
  operationNames: string[];
  start: string;
  traceIds: string[];
}

export interface Span {
  endpointName: string;
  serviceCode: string;
  parentSpanId: number;
  segmentId: string;
  label?: string;
  layer: string;
  spanId: number;
  traceId: string;
  type: string;
  peer: string;
  component: string;
  isError: boolean;
  isBroken?: boolean;
  refs: Array<Ref>;
  startTime: number;
  endTime: number;
  dur?: number;
  children?: Span[];
  tags?: Array<Map<string,string>>;
  logs?: log[];
}

export interface log{
  time :number;
  data :Map<string,string>;
}

export interface Ref{
  traceId: string;
  parentSegmentId: string;
  parentSpanId: number;
  type: string;
}

export interface StatisticsSpan{
  groupRef: StatisticsGroupRef;
  maxTime: number;
  minTime: number;
  sumTime: number;
  avgTime: number;
  count: number;
}

export interface StatisticsGroupRef{
  endpointName: string;
  type: string;
}

export class TraceTreeRef {
  segmentMap: Map<string, Span>;
  segmentIdGroup: string[];
}