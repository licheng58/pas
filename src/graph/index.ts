
/* tslint:disable */
import axios, { AxiosPromise } from 'axios';
import { cancelToken } from '@/utils/cancelToken';
import * as option from './query/option';
import * as trace from './query/trace';
import * as topology from './query/topology';
import * as alarm from './query/alarm';
import * as profile from './query/profile';
import * as dashboard from './query/dashboard';
import * as errorLog from './query/log';
import * as logDebug from './query/debug';

const query: any = {
  ...errorLog,
  ...option,
  ...trace,
  ...topology,
  ...alarm,
  ...profile,
  ...dashboard,
  ...logDebug,
};

class Graph {
  private queryData: string = '';
  public query(queryData: string) {
  
    this.queryData = queryData;
    return this;
  }
  public params(variablesData: any): AxiosPromise<void> {
    // console.log(query[this.queryData]);
    return axios
      .post(
        '/graphql',
        {
          query: query[this.queryData],
          variables: variablesData,
        },
        { cancelToken: cancelToken() },
      )
      .then((res: any) => {
        if (res.data.errors) {
          res.data.errors = res.data.errors.map((e: { message: string }) => e.message).join(' ');
        }
        // console.log(res);
        return res;
      })
      .catch((err) => {
        throw err;
      });
  }
}

export default new Graph();
