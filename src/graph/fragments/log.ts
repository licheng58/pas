

export const QueryBrowserErrorLogs = {
  variable: '$condition: BrowserErrorLogQueryCondition',
  query: `
    queryBrowserErrorLogs(condition: $condition) {
        logs {
           message
           service
           serviceVersion
           time
           pagePath
           category
           errorUrl
           stack
           grade
        }
        total
    }`,
};

export const QueryServiceLogs = {
  variable: '$condition: LogQueryCondition',
  query: `
    queryLogs(condition: $condition) {
        logs {
          serviceName
          serviceId
          serviceInstanceName
          serviceInstanceId
          endpointName
          endpointId
          traceId
          timestamp
          contentType
          content
          tags {
            key
            value
          }
        }
        total
    }`,
};

export const QueryLogsByKeywords = {
  variable: '',
  query: `
  support: supportQueryLogsByKeywords`,
};
