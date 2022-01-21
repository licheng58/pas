
<template>
  <div class="rk-trace flex-v">
    <TraceSearch />
    <div class="rk-trace-inner">
      <TraceTable />
      <TraceDetail :current="stateTrace.currentTrace"
                   :spans="stateTrace.traceSpans" />
    </div>
  </div>
</template>

<script lang="ts">
import { Option } from '@/types/global';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import TraceSearch from '@/views/components/trace/trace-search.vue';
import TraceTable from '@/views/components/trace/trace-table.vue';
import TraceDetail from '@/views/components/trace/trace-detail.vue';

@Component({
  components: {
    TraceTable,
    TraceDetail,
    TraceSearch,
  },
})
export default class Trace extends Vue {
  @State('rocketTrace') private stateTrace!: any;
  @Mutation('SET_EVENTS') private SET_EVENTS: any;

  @Prop({ default: () => ({ label: 'All', key: '' }) })
  private service!: Option;

  @Prop({ default: false, type: Boolean })
  private beforeMount() {
    this.SET_EVENTS([]);
  }
}
</script>
<style lang="scss">
.rk-trace {
  flex-grow: 1;
  height: 100%;
  min-height: 0;
}
.rk-trace-inner {
  height: 100%;
  display: flex;
  min-height: 0;
}
</style>
