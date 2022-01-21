
<template>
  <div class="rk-debug flex-v">
    <DebugToolBar />
    <LogLAL />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DebugToolBar from '../components/debug/tool-bar.vue';
import LogLAL from '../components/debug/log-lal.vue';

@Component({
  components: { DebugToolBar, LogLAL },
})
export default class Debug extends Vue {}
</script>

<style lang="scss" scoped>
.rk-debug {
  flex-grow: 1;
  height: 100%;
  min-height: 0;
}
</style>
