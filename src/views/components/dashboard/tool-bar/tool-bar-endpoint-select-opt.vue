
<template>
  <div class="rk-dashboard-opt ell"
       @click="$emit('handleSelect', data)">
    {{ data.label }}
    <svg style="margin-top: 3px;"
         class="icon sm r"
         @click.stop="show = !show">
      <use xlink:href="#code"></use>
    </svg>
    <div class="rk-dashboard-opt-tip"
         v-if="show">{{ data.label }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ToolBarEndpointSelectOpt extends Vue {
  @Prop() public data!: any;
  private show: boolean = false;
}
</script>

<style lang="scss" scoped>
.rk-dashboard-opt-tip {
  margin-top: 5px;
  word-break: break-all;
  white-space: pre-wrap;
  border-radius: 3px;
  padding: 3px;
  background-color: #f3f4f9;
  color: #334444;
}
</style>
