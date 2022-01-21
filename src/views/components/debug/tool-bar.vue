
<template>
  <div class="debug-tool-bar flex-v">
    <span v-for="(i, index) in tabConstant"
          :key="index"
          class="mr-15">
      <a class="debug-tab mb-10"
         @click="handleTab(i)"
         :class="{
          active: rocketLogLAL.tabType === i,
          grey: rocketLogLAL.tabType !== i,
        }">
        {{ i }}
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Mutation, State } from 'vuex-class';
import Component from 'vue-class-component';
import { State as rocketLogAnaState } from '@/store/modules/debug/log-lal';
import { DebuggerTools } from './debug-constant';

@Component({
  components: {},
})
export default class DebugToolBar extends Vue {
  @Mutation('SET_TAB_TYPE') private SET_TAB_TYPE: any;
  @State('rocketDebugLAL') private rocketLogLAL!: rocketLogAnaState;
  private tabConstant = DebuggerTools;
  private created() {
    this.SET_TAB_TYPE(this.tabConstant[0]);
  }
  private handleTab(i: string) {
    this.SET_TAB_TYPE(i);
  }
}
</script>

<style lang="scss" scoped>
.debug-tool-bar {
  border-bottom: 1px solid #252a2f;
  background-color: #333840;
  padding: 10px 15px 0;
  color: #eee;
}
.debug-tab {
  display: inline-block;
  padding: 4px 13px 4px 15px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  will-change: border-color, color;
  transition: border-color 0.3s, color 0.3s;
  &.active::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 5px;
    height: 10px;
    border-radius: 4px;
    background-color: #448dfe;
    top: 9px;
    left: 4px;
  }
}
</style>
