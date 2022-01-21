

import {
  Services,
  BrowserServices,
  Endpoints,
  Instances,
  Database,
  OAPTimeInfo,
  OAPVersion,
} from '../fragments/option';

export const queryServices = `query queryServices(${Services.variable}) {${Services.query}}`;

export const queryBrowserServices = `query queryBrowserServices(
  ${BrowserServices.variable}) {${BrowserServices.query}}`;

export const queryDatabases = `query queryDatabases(${Database.variable}) {${Database.query}}`;

export const queryEndpoints = `query queryEndpoints(${Endpoints.variable}) {${Endpoints.query}}`;

export const queryInstances = `query queryInstances(${Instances.variable}) {${Instances.query}}`;

export const queryOAPTimeInfo = `query queryOAPTimeInfo {${OAPTimeInfo.query}}`;

export const queryOAPVersion = `query ${OAPVersion.query}`;
