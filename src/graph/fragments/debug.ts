

export const QueryLogTest = {
  variable: '$requests: LogTestRequest!',
  query: `test(requests: $requests) { log { content, serviceName, serviceInstanceName, endpointName,
    traceId, timestamp, contentType, content, tags { key, value }}
  metrics { name, value, timestamp, tags { key, value }} }`,
};
