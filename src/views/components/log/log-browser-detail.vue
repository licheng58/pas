
<template>
  <div class="log-detail-chart-table">
    <div class="rk-log-t-loading"
         v-show="loading">
      <svg class="icon loading">
        <use xlink:href="#spinner"></use>
      </svg>
    </div>
    <LogTable :tableData="data"
              :type="`browser`">
      <div class="log-tips"
           v-if="!data.length">{{ $t('noData') }}</div>
    </LogTable>
    <rk-sidebox :width="'50%'"
                :show.sync="showDetail"
                :title="$t('logDetail')">
      <div class="rk-log-detail">
        <div class="mb-10 clear rk-flex"
             v-for="(item, index) in columns"
             :key="index">
          <template>
            <span class="g-sm-4 grey">{{ $t(item.value) }}:</span>
            <span v-if="item.label === 'time'"
                  class="g-sm-8 wba">{{ currentLog[item.label] | dateformat }}</span>
            <span v-else-if="item.label === 'errorUrl'">{{ currentLog.pagePath }}</span>
            <span v-else
                  class="g-sm-8 wba">{{ currentLog[item.label] || '-' }}</span>
          </template>
        </div>
      </div>
    </rk-sidebox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import LogTable from './log-table/log-table.vue';
import { BrowserLogConstants } from './log-constant';

@Component({
  components: { LogTable },
})
export default class LogBrowserDetail extends Vue {
  @Prop() private data: any;
  @Prop() private loading!: true;

  private columns = BrowserLogConstants;
  private showDetail = false;
  private currentLog = {};

  private handleSelectLog(data: any) {
    this.currentLog = data;
    this.showDetail = true;
  }
  @Watch('data')
  private bindSelect() {
    this.$eventBus.$on('HANDLE-SELECT-LOG', this, this.handleSelectLog);
  }
}
</script>
<style lang="scss">
.rk-tooltip-popper.log-table-tooltip .rk-tooltip-inner {
  max-width: 600px;
}
.log-detail-chart-table {
  position: relative;
  min-height: 300px;
  border-bottom: none;
}
</style>
<style lang="scss" scoped>
.rk-log-t-loading {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 70px;
  margin-top: 40px;
  line-height: 88px;
  overflow: hidden;
  .icon {
    width: 30px;
    height: 30px;
  }
}
.dialog-c-text {
  white-space: pre;
  overflow: auto;
  font-family: monospace;
}
.log-tips {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.rk-flex {
  display: flex;
}
.g-sm-4.grey {
  flex-shrink: 0;
}
</style>
