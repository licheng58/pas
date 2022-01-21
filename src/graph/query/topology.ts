

import {
  Topo,
  ServiceTopo,
  ServicesTopo,
  TopoMetric,
  TopoInstanceDependency,
  TopoServiceMetric,
  TopoClientMetric,
  DependencyInstanceServerMetric,
  DependencyInstanceClientMetric,
  endpointTopology,
} from '../fragments/topology';

export const queryTopo = `query queryTopo(${Topo.variable}) {${Topo.query}}`;

export const queryServiceTopo = `query queryServiceTopo(${ServiceTopo.variable}) {${ServiceTopo.query}}`;

export const queryServicesTopo = `query queryServiceTopo(${ServicesTopo.variable}) {${ServicesTopo.query}}`;

export const queryTopoInfo = `query queryTopoInfo(
    ${Topo.variable},
    ${TopoMetric.variable},
    ${TopoServiceMetric.variable},
    ${TopoClientMetric.variable})
      {
        ${TopoMetric.query},
        ${TopoServiceMetric.query},
        ${TopoClientMetric.query}
      }`;
export const queryTopoInfoServer = `query queryTopoInfo(
  ${Topo.variable},
  ${TopoMetric.variable},
  ${TopoServiceMetric.variable})
    {
      ${TopoMetric.query},
      ${TopoServiceMetric.query}
    }`;
export const queryTopoInfoClient = `query queryTopoInfo(
  ${Topo.variable},
  ${TopoMetric.variable},
  ${TopoClientMetric.variable})
    {
      ${TopoMetric.query},
      ${TopoClientMetric.query}
    }`;

export const queryTopoInstanceDependency = `query queryTopoInstanceDependency(
  ${TopoInstanceDependency.variable}) {${TopoInstanceDependency.query}}`;

export const queryDependencyInstanceServerMetric = `query queryDependencyInstanceServerMetric(
  ${DependencyInstanceServerMetric.variable}) {${DependencyInstanceServerMetric.query}}`;

export const queryDependencyInstanceClientMetric = `query queryDependencyInstanceClientMetric(
  ${DependencyInstanceClientMetric.variable}) {${DependencyInstanceClientMetric.query}}`;

// export const queryTopoServiceDetail = `query queryTopoServiceDetail(
//   ${TopoServiceDetail.variable}) {${TopoServiceDetail.query}}`;

export const queryEndpointTopology = `query queryEndpointTopology(${endpointTopology.variable}) {
  ${endpointTopology.query}}`;
