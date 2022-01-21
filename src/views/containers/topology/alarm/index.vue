
<template>
  <div class="rk-alarm flex-v">
    <AlarmTool :keyword="current.label"
               :total="rocketAlarm.total" />
    <AlarmTable :data="rocketAlarm.alarmService" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AlarmTool from './alarm-tool.vue';
import AlarmTable from '@/views/components/alarm/alarm-table.vue';
import { State } from 'vuex-class';
import { Prop } from 'vue-property-decorator';

@Component({
  components: { AlarmTool, AlarmTable },
})
export default class Alarm extends Vue {
  @State('rocketAlarm') private rocketAlarm!: any;
  @Prop() private current!: { key: number | string; label: number | string };
}
</script>

<style lang="scss">
.rk-alarm {
  flex-grow: 1;
  height: 100%;
  min-height: 0;
}
</style>
