

export enum DASHBOARDTYPE {
  SERVICE = 'service',
  METRIC = 'metric',
  DATABASE = 'database',
  BROWSER = 'browser',
}
export enum QueryTypes {
  ReadMetricsValue = 'readMetricsValue',
  ReadMetricsValues = 'readMetricsValues',
  SortMetrics = 'sortMetrics',
  ReadLabeledMetricsValues = 'readLabeledMetricsValues',
  READHEATMAP = 'readHeatMap',
  ReadSampledRecords = 'readSampledRecords',
}
export const UpdateDashboardEvents = 'UpdateDashboardEvents';
export const SeriesTypes = [
  { key: 'Service', label: 'Service Events' },
  { key: 'Endpoint', label: 'Service Endpoint Events' },
  { key: 'ServiceInstance', label: 'Service Instance Events' },
];
export const EventsHeaders = [
  { text: 'eventID', class: 'uuid' },
  { text: 'eventName', class: 'name' },
  { text: 'eventsType', class: 'type' },
  { text: 'startTime', class: 'startTime' },
  { text: 'endTime', class: 'endTime' },
];
export const EventsDetailHeaders = [
  { text: 'eventID', class: 'uuid' },
  { text: 'eventName', class: 'name' },
  { text: 'eventsType', class: 'type' },
  { text: 'startTime', class: 'startTime' },
  { text: 'endTime', class: 'endTime' },
  { text: 'eventsMessage', class: 'message' },
  { text: 'eventsParameters', class: 'parameters' },
];
