

export const Alarm = {
  variable: '$keyword: String, $scope: Scope, $duration:Duration!, $tags:[AlarmTag], $paging: Pagination!',
  query: `
    getAlarm(keyword: $keyword, scope: $scope, duration: $duration, paging: $paging, tags: $tags) {
      items: msgs {
        key: id
        message
        startTime
        scope
        tags {
          key
          value
        }
        events {
          uuid
          source {
            service serviceInstance endpoint
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
      }
      total
    }`,
};
