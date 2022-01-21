

import {
  TypeOfMetrics,
  getAllTemplates,
  changeTemplate,
  disableTemplate,
  querySampledRecords,
  queryHeatMap,
  queryLabeledMetricsValues,
  querySortMetrics,
  queryMetricsValue,
  queryMetricsValues,
  fetchEvents,
} from '../fragments/dashboard';

export const queryTypeOfMetrics = `query queryTypeOfMetrics(${TypeOfMetrics.variable}) {${TypeOfMetrics.query}}`;

export const mutationChangeTemplate = `mutation mutationChangeTemplate(${changeTemplate.variable}) {
  ${changeTemplate.query}}`;

export const mutationDisableTemplate = `mutation mutationDisableTemplate(${disableTemplate.variable}) {
  ${disableTemplate.query}}`;

export const queryGetAllTemplates = `query queryGetAllTemplates {${getAllTemplates.query}}`;

export const readHeatMap = `query queryData(${queryHeatMap.variable}) {${queryHeatMap.query}}`;

export const readSampledRecords = `query queryData(${querySampledRecords.variable}) {${querySampledRecords.query}}`;

export const readLabeledMetricsValues = `query queryData(${queryLabeledMetricsValues.variable}) {
  ${queryLabeledMetricsValues.query}}`;

export const sortMetrics = `query queryData(${querySortMetrics.variable}) {${querySortMetrics.query}}`;

export const readMetricsValue = `query queryData(${queryMetricsValue.variable}) {${queryMetricsValue.query}}`;

export const readMetricsValues = `query queryData(${queryMetricsValues.variable}) {${queryMetricsValues.query}}`;

export const queryEvents = `query queryData(${fetchEvents.variable}) {${fetchEvents.query}}`;
