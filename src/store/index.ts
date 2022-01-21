

import Vue from 'vue';
import Vuex from 'vuex';
import rocketbot, { State as RocketbotState } from './modules/global';
import rocketOption, { State as DashboardOptionState } from './modules/global/selectors';
import rocketData, { State as DashboardDataState } from './modules/dashboard/dashboard-data';
import rocketTopo, { State as TopoState } from '@/store/modules/topology';
import rocketTopoGroup, { State as TopoGroupState } from '@/store/modules/topology/group';
import rocketTrace, { State as TraceState } from '@/store/modules/trace';
import rocketAlarm, { State as AlarmState } from '@/store/modules/alarm';
import profileStore, { State as ProfileState } from '@/store/modules/profile/profile-store';
import rocketLog, { State as LogState } from '@/store/modules/log';
import rocketEvent, { State as EventState } from '@/store/modules/event';
import rocketDebugLAL, { State as logLALState } from '@/store/modules/debug/log-lal';

Vue.use(Vuex);

export interface State {
  rocketbot: RocketbotState;
  rocketOption: DashboardOptionState;
  rocketData: DashboardDataState;
  rocketTopo: TopoState;
  rocketTopoGroup: TopoGroupState;
  rocketTrace: TraceState;
  rocketAlarm: AlarmState;
  profileStore: ProfileState;
  logStore: LogState;
  eventStore: EventState;
  logLALStore: logLALState;
}

export default new Vuex.Store({
  modules: {
    rocketbot,
    rocketOption,
    rocketData,
    rocketTopo,
    rocketTopoGroup,
    rocketTrace,
    rocketAlarm,
    profileStore,
    rocketLog,
    rocketEvent,
    rocketDebugLAL,
  },
});
