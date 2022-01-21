

export enum LogTestConstants {
  Timestamp = 'timestamp',
  Service = 'service',
  ServiceInstance = 'serviceInstance',
  Endpoint = 'endpoint',
  Body = 'body',
  TraceContext = 'traceContext',
  Tags = 'tags',
  DSL = 'dsl',
  Type = 'type',
}

export const TypeList = [
  {
    label: 'Text',
    value: 'text',
  },
  {
    label: 'Json',
    value: 'json',
  },
  {
    label: 'YAML',
    value: 'yaml',
  },
];

export const LogMetricsHeader = [
  {
    label: 'name',
    value: 'name',
  },
  {
    label: 'time',
    value: 'timestamp',
  },
  {
    label: 'value',
    value: 'value',
  },
  {
    label: 'tags',
    value: 'tags',
  },
];

export const DebuggerTools = ['Log Analysis Language Debugger'];
