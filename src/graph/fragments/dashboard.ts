
/* tslint:disable */
export const TypeOfMetrics = {
  variable: '$name: String!',
  query: `typeOfMetrics(name: $name)`,
};

export const getAllTemplates = {
  query: `
    getAllTemplates(includingDisabled: false) {
      name,
      type
      configuration,
      activated,
      disabled,
    }
  `,
};

export const queryTest = {
  variable: ['$condition: TestQueryCondition'],
  query: `queryTest(condition: $condition) {id name}`,  
};

export const fetchEvents = {
  variable: ['$condition: EventQueryCondition'],
  query: `
  fetchEvents: queryEvents(condition: $condition) {
    events {
      uuid
      source {
        service
        serviceInstance
        endpoint
      }
      name
      type
      message
      parameters {
        key
        value
      }
      startTime
      endTime
    }
    total
  }`,
};

export const changeTemplate = {
  variable: '$setting: DashboardSetting!',
  query: `
    changeTemplate(setting: $setting) {
      status
      message
    }
  `,
};

export const disableTemplate = {
  variable: '$setting: DashboardSetting!',
  query: `
    disableTemplate(setting: $setting) {
      status
      message
    }
  `,
};

export const queryMetricsValues = {
  variable: ['$condition: MetricsCondition!, $duration: Duration!'],
  query: `
  readMetricsValues: readMetricsValues(condition: $condition, duration: $duration) {
    label
    values {
      values {value}
    }
  }`,
};

export const queryMetricsValue = {
  variable: ['$condition: MetricsCondition!, $duration: Duration!'],
  query: `
  readMetricsValue: readMetricsValue(condition: $condition, duration: $duration)`,
};

export const querySortMetrics = {
  variable: ['$condition: TopNCondition!, $duration: Duration!'],
  query: `
  sortMetrics: sortMetrics(condition: $condition, duration: $duration) {
    name
    id
    value
    refId
  }`,
};

export const queryLabeledMetricsValues = {
  variable: ['$condition: MetricsCondition!, $labels: [String!]!, $duration: Duration!'],
  query: `
  readLabeledMetricsValues: readLabeledMetricsValues(
    condition: $condition,
    labels: $labels,
    duration: $duration) {
    label
    values {
      values {value}
    }
  }`,
};

export const queryHeatMap = {
  variable: ['$condition: MetricsCondition!, $duration: Duration!'],
  query: `
  readHeatMap: readHeatMap(condition: $condition, duration: $duration) {
    values {
      id
      values
    }
    buckets {
      min
      max
    }
  }`,
};

export const querySampledRecords = {
  variable: ['$condition: TopNCondition!, $duration: Duration!'],
  query: `
  readSampledRecords: readSampledRecords(condition: $condition, duration: $duration) {
    name
    value
    refId
  }`,
};
