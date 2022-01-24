
<template>
  <div class="endpoint-dependency-page">
    <div class="rk-dashboard-bar flex-h">
      <ToolBarSelect :selectable="false" :title="$t('currentService')" :current="current" icon="package" />
      <ToolBarEndpointSelect @onChoose="selectEndpoint" :title="$t('currentEndpoint')" :current="stateDashboardOption.currentDependencyEndpoint" :data="stateDashboardOption.endpoints" icon="code" />
      <ToolBarEndpointSelect @onChoose="selectDepth" :title="$t('currentDepth')" :current="rocketTopo.currentEndpointDepth" :data="depths" icon="code" />
    </div>
    <TopoEndpointDependency />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Action, Getter, State, Mutation } from 'vuex-class';
import { Option } from '@/types/global';
import ToolBarSelect from '@/views/components/dashboard/tool-bar/tool-bar-select.vue';
import ToolBarEndpointSelect from '@/views/components/dashboard/tool-bar/tool-bar-endpoint-select.vue';
import TopoEndpointDependency from '@/views/components/topology/dependency/topo-endpoint-dependency.vue';

@Component({
  components: {
    ToolBarSelect,
    ToolBarEndpointSelect,
    TopoEndpointDependency,
  },
})
export default class WindowEndpointDependency extends Vue {
  @State('rocketOption') private stateDashboardOption!: any;
  @State('rocketTopo') private rocketTopo!: any;
  @Getter('durationTime') private durationTime: any;
  @Mutation('SET_CURRENT_SERVICE') private SET_CURRENT_SERVICE: any;
  @Mutation('SET_EDIT') private SET_EDIT: any;
  @Mutation('rocketTopo/SET_ENDPOINT_DEPTH') private SET_ENDPOINT_DEPTH: any;
  @Action('GET_SERVICE_ENDPOINTS') private GET_SERVICE_ENDPOINTS: any;
  @Action('MIXHANDLE_CHANGE_GROUP_WITH_CURRENT') private MIXHANDLE_CHANGE_GROUP_WITH_CURRENT: any;
  @Mutation('SET_CURRENT_DEPENDENCY_ENDPOINT') private SET_CURRENT_DEPENDENCY_ENDPOINT: any;
  @Action('rocketTopo/GET_ALL_ENDPOINT_DEPENDENCY') private GET_ALL_ENDPOINT_DEPENDENCY: any;
  @Prop() private current!: { key: number | string; label: string };

  private depths: Array<{ key: number; label: string }> = [{ key: 2, label: '2' }];

  private beforeMount() {
    this.depths = [1, 2, 3, 4, 5].map((item: number) => ({ key: item, label: String(item) }));
    this.SET_CURRENT_SERVICE(this.current);
    this.MIXHANDLE_CHANGE_GROUP_WITH_CURRENT({ index: 0, current: 2 });
    this.GET_SERVICE_ENDPOINTS({ duration: this.durationTime, serviceId: this.current.key, keyword: '' }).then(() => {
      this.GET_ALL_ENDPOINT_DEPENDENCY({
        endpointIds: [this.stateDashboardOption.currentDependencyEndpoint.key],
        duration: this.durationTime,
      });
    });
  }

  private selectEndpoint(i: Option) {
    this.SET_CURRENT_DEPENDENCY_ENDPOINT(i);
    this.GET_ALL_ENDPOINT_DEPENDENCY({
      endpointIds: [this.stateDashboardOption.currentDependencyEndpoint.key],
      duration: this.durationTime,
    });
  }

  private selectDepth(i: { key: number; label: string }) {
    this.SET_ENDPOINT_DEPTH(i);
    this.GET_ALL_ENDPOINT_DEPENDENCY({
      endpointIds: [this.stateDashboardOption.currentDependencyEndpoint.key],
      duration: this.durationTime,
    });
  }

  private beforeDestroy() {
    this.SET_EDIT(false);
    this.SET_ENDPOINT_DEPTH({ key: 2, label: '2' });
    this.$emit('changeEndpointComps', { type: '' });
  }
}
</script>

<style lang="scss" scoped>
.endpoint-dependency-page {
  height: calc(100% - 48px);
}
.rk-dashboard-bar {
  flex-shrink: 0;
  color: #efefef;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  padding: 0 15px;
  // padding-left: 15px;
}
</style>
