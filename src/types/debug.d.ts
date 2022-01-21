
export interface LogTestOptions {
  service: string;
  serviceInstance: string;
  endpoint: string;
  timestamp: number;
  body: LogDataBody;
  traceContext: TraceContext;
  tags: LogTags;
}

interface LogDataBody {
  type: string;
  content: string;
}

interface TraceContext {
  traceId: string;
  traceSegmentId: string;
  spanId: number;
}

interface LogTags {
  data: { key: string; value: string };
}
export interface LogTestMetrics {
  name: String;
  tags: { key: string; value: string };
  value: number;
  timestamp: number;
}
