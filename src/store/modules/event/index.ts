

import { ActionTree, MutationTree, Commit } from 'vuex';
import { Event } from '@/types/dashboard';
import { AxiosResponse } from 'axios';
import graph from '@/graph';
import { QueryEventCondition } from '../../../types/dashboard';
import { DurationTime } from '@/types/global';
import * as types from '../../mutation-types';

const Scopes = ['Service', 'ServiceInstance', 'Endpoint'];
export interface State {
  currentEvents: Event[];
  totalSize: number;
  errorMessage: string;
  eventErrors: { [key: string]: string };
}

const initState: State = {
  currentEvents: [],
  totalSize: 1,
  errorMessage: '',
  eventErrors: {},
};

// mutations
const mutations: MutationTree<any> = {
  [types.UPDATE_EVENTS](state: State, param: { events: Event[]; duration: DurationTime }) {
    const events = param.events.map((d: Event) => {
      d.scope = d.source.endpoint ? Scopes[2] : d.source.serviceInstance ? Scopes[1] : Scopes[0];
      return d;
    });
    state.currentEvents = events;
  },
  [types.SET_TOTAL_SIZE](state: State, total: number) {
    state.totalSize = total;
  },
  [types.SET_EVENT_ERRORS](state: State, data: { msg: string; desc: string }) {
    state.eventErrors = {
      ...state.eventErrors,
      [data.msg]: data.desc,
    };
  },
};

// actions
const actions: ActionTree<State, any> = {
  FETCH_EVENTS(context: { commit: Commit }, params: { condition: QueryEventCondition }) {
    return graph
      .query('queryEvents')
      .params({ condition: params.condition })
      .then((res: AxiosResponse) => {
        context.commit(types.SET_EVENT_ERRORS, { msg: 'queryEvents', desc: res.data.errors || '' });
        if (res.data.errors) {
          context.commit('UPDATE_EVENTS', { events: [], duration: params.condition.time });
          context.commit('SET_TOTAL_SIZE', 1);
          return [];
        }
        context.commit('UPDATE_EVENTS', {
          events: res.data.data.fetchEvents.events,
          duration: params.condition.time,
        });
        context.commit('SET_TOTAL_SIZE', res.data.data.fetchEvents.total);

        return res.data.data.fetchEvents.events || [];
      });
  },
};

export default {
  state: initState,
  actions,
  mutations,
};
