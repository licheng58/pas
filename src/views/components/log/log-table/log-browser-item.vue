

<template>
  <div @click="showSelectSpan"
       :class="['log-item', 'clearfix']"
       ref="logItem">
    <div v-for="(item, index) in columns"
         :key="index"
         :class="['method', ['message', 'stack'].includes(item.label) ? 'autoHeight' : '']"
         :style="{
        lineHeight: 1.3,
        width: `${item.drag ? item.method : ''}px`,
      }">
      <span v-if="item.label === 'time'">{{ data.time | dateformat }}</span>
      <span v-else-if="item.label === 'errorUrl'">{{ data.pagePath }}</span>
      <span v-else
            v-tooltip:bottom="data[item.label] || '-'">{{ data[item.label] || '-' }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BrowserLogConstants } from '../log-constant';

@Component
export default class ServiceItem extends Vue {
  @Prop() private data: any;

  private columns = BrowserLogConstants;
  private showSelectSpan() {
    const items: NodeListOf<any> = document.querySelectorAll('.log-item');

    for (const item of items) {
      item.style.background = '#fff';
    }
    const logItem: any = this.$refs.logItem;

    logItem.style.background = 'rgba(0, 0, 0, 0.1)';
    this.$eventBus.$emit('HANDLE-SELECT-LOG', this.data);
  }
}
</script>
<style lang="scss" scoped>
.log-item {
  white-space: nowrap;
  position: relative;
  cursor: pointer;
}

.log-item.selected {
  background: rgba(0, 0, 0, 0.04);
}

.log-item:not(.level0):hover {
  background: rgba(0, 0, 0, 0.04);
}

.log-item:hover {
  background: rgba(0, 0, 0, 0.04) !important;
}

.log-item > div {
  width: 140px;
  padding: 0 5px;
  display: inline-block;
  border: 1px solid transparent;
  border-right: 1px dotted silver;
  overflow: hidden;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.log-item .text {
  width: 100% !important;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.log-item > div.method {
  padding: 7px 5px;
  line-height: 30px;
}
</style>
