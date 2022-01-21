

export const Services = {
  variable: ['$duration: Duration!', '$keyword: String!'],
  query: `
    services: getAllServices(duration: $duration, group: $keyword) {
      key: id
      label: name
      group
    }
  `,
};

export const BrowserServices = {
  variable: ['$duration: Duration!'],
  query: `
    services: getAllBrowserServices(duration: $duration) {
      key: id
      label: name
    }
  `,
};

export const Database = {
  variable: '$duration: Duration!',
  query: `
    services: getAllDatabases(duration: $duration) {
      key: id
      label: name
    }
  `,
};

export const Endpoints = {
  variable: '$serviceId: ID!, $keyword: String!',
  query: `
    getEndpoints: searchEndpoint(serviceId: $serviceId, keyword: $keyword, limit: 100) {
      key: id
      label: name
    }
`,
};

export const Instances = {
  variable: '$serviceId: ID!, $duration: Duration!',
  query: `
    getServiceInstances(duration: $duration, serviceId: $serviceId) {
      key: id
      label: name
      language
      attributes {
        name
        value
      }
    }
  `,
};

export const OAPTimeInfo = {
  query: `
    getTimeInfo {
      timezone
      currentTimestamp
    }
  `,
};

export const OAPVersion = {
  query: `version { version }`,
};
