
<template>
  <div class="rk-alarm flex-v">
    <AlarmTool :total="rocketAlarm.total" />
    <AlarmTable :data="rocketAlarm.alarmService" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AlarmTool from '../components/alarm/alarm-tool.vue';
import AlarmTable from '../components/alarm/alarm-table.vue';
import { State } from 'vuex-class';

@Component({
  components: { AlarmTool, AlarmTable },
})
export default class Alarm extends Vue {
  @State('rocketAlarm') private rocketAlarm!: any;
}
</script>

<style lang="scss">
.rk-alarm {
  flex-grow: 1;
  height: 100%;
  min-height: 0;
}
</style>
