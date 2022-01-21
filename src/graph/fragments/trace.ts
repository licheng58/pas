

export const Traces = {
  variable: '$condition: TraceQueryCondition',
  query: `
  data: queryBasicTraces(condition: $condition) {
    traces {
      key: segmentId
      endpointNames
      duration
      start
      isError
      traceIds
    }
    total
  }`,
};

export const ServiceInstanceOption = {
  variable: '$duration: Duration!, $serviceId: ID!',
  query: `
    instanceId: getServiceInstances(duration: $duration, serviceId: $serviceId) {
      key: id
      label: name
    }`,
};

/**
 * @param { traceId } { string }
 */
export const Trace = {
  variable: '$traceId: ID!',
  query: `
  trace: queryTrace(traceId: $traceId) {
    spans {
      traceId
      segmentId
      spanId
      parentSpanId
      refs {
        traceId
        parentSegmentId
        parentSpanId
        type
      }
      serviceCode
      serviceInstanceName
      startTime
      endTime
      endpointName
      type
      peer
      component
      isError
      layer
      tags {
        key
        value
      }
      logs {
        time
        data {
          key
          value
        }
      }
    }
  }
  `,
};
