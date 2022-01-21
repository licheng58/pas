
<template>
  <div class="log-detail-chart-table">
    <div class="rk-log-t-loading"
         v-show="loading">
      <svg class="icon loading">
        <use xlink:href="#spinner"></use>
      </svg>
    </div>
    <LogTable :tableData="data"
              :type="`service`"
              :noLink="noLink">
      <div class="log-tips"
           v-if="!data.length">{{ $t('noData') }}</div>
    </LogTable>
    <rk-sidebox :width="'800px'"
                :show.sync="showDetail"
                :title="$t('logDetail')">
      <LogServiceDetailContent :currentLog="currentLog" />
    </rk-sidebox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import LogTable from './log-table/log-table.vue';
import LogServiceDetailContent from './log-detail-content.vue';
import { ServiceLogDetail } from './log-constant';
import { formatJson } from '@/utils/formatJson';

@Component({
  components: { LogTable, LogServiceDetailContent },
})
export default class LogServiceDetail extends Vue {
  @Prop() private data: any;
  @Prop() private loading!: true;
  @Prop() private noLink!: boolean;

  private columns = ServiceLogDetail;
  private showDetail: boolean = false;
  private list = [];
  private currentLog: any = {};
  private logContent: string = '';

  private handleSelectLog(data: any[]) {
    this.currentLog = data;
    if (this.currentLog.contentType === 'JSON') {
      this.logContent = formatJson(JSON.parse(this.currentLog.content));
    } else {
      this.logContent = this.currentLog.content;
    }
    this.showDetail = true;
  }
  @Watch('data')
  private bindSelect() {
    this.$eventBus.$on('HANDLE-SELECT-LOG', this, this.handleSelectLog);
  }
}
</script>
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
