

import { QueryBrowserErrorLogs, QueryServiceLogs, QueryLogsByKeywords } from '../fragments/log';

export const queryBrowserErrorLogs = `query queryBrowserErrorLogs(${QueryBrowserErrorLogs.variable}) {
  ${QueryBrowserErrorLogs.query}}`;
export const queryServiceLogs = `query queryLogs(${QueryServiceLogs.variable}) {${QueryServiceLogs.query}}`;
export const queryLogsByKeywords = `query queryLogsByKeywords {${QueryLogsByKeywords.query}}`;
