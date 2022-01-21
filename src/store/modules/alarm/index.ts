

import { Commit, ActionTree, MutationTree } from 'vuex';
import * as types from '@/store/mutation-types';
import { AxiosResponse } from 'axios';
import graph from '@/graph';
import { Alarm, AlarmParams } from '@/types/alarm';

export interface State {
  alarmService: Alarm[];
  total: number;
  alarmErrors: { [key: string]: string };
}

const initState: State = {
  alarmService: [],
  total: 0,
  alarmErrors: {},
};

// getters
const getters = {};

// mutations
const mutations: MutationTree<State> = {
  [types.SET_ALARM](state: State, data: { items: Alarm[]; total: number }): void {
    state.alarmService = data.items;
    state.total = data.total;
  },
  [types.CLEAR_ALARM](state: State): void {
    state.alarmService = [];
    state.total = 0;
  },
  [types.SET_ALARM_ERRORS](state: State, data: { msg: string; desc: string }) {
    state.alarmErrors = {
      ...state.alarmErrors,
      [data.msg]: data.desc,
    };
  },
};

// actions
const actions: ActionTree<State, any> = {
  GET_ALARM(context: { commit: Commit; state: State }, params: AlarmParams): Promise<any> {
    return graph
      .query('queryAlarms')
      .params(params)
      .then((res: AxiosResponse<any>) => {
        context.commit(types.SET_ALARM_ERRORS, { msg: 'queryAlarms', desc: res.data.errors || '' });
        if (res.data.errors) {
          return;
        }
        if (res.data.data.getAlarm.items) {
          context.commit(types.SET_ALARM, res.data.data.getAlarm);
        }
      });
  },
  CLEAR_ALARM(context: { commit: Commit; state: State }): void {
    context.commit(types.CLEAR_ALARM);
  },
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
