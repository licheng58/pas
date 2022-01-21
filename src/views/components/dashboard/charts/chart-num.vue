

<template>
  <div class="rk-chart-num">
    <div v-for="(item, index) in data"
         :key="index"
         class="rk-num-detail">
      <span class="b"
            :style="`color: ${colors}`">{{
        typeof item.avgNum === 'string' ? item.avgNum : isNaN(item.avgNum) ? null : item.avgNum.toFixed(2)
      }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ChartNum extends Vue {
  @Prop() private data!: any;
  @Prop() private item!: any;
  @Prop() private theme!: string;

  private get colors() {
    return this.theme === 'dark' ? '#eee' : '#333';
  }
}
</script>
<style lang="scss" scoped>
.rk-chart-num {
  font-size: 14px;
  color: #333;
}
.rk-num-detail {
  span:first-child {
    padding-right: 8px;
    box-sizing: border-box;
    color: #666;
  }
}
</style>
