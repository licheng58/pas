

<template>
  <nav class="rk-alarm-tool flex-h">
    <div class="mr-10  rk-alarm-tool-div"
         style="padding: 3px 15px 0">
      <div class="mr-10 grey f-14">关键字搜索 :</div>
      <input type="text"
             disabled
             v-model="keyword"
             class="rk-alarm-tool-input"
             @input="handleFetch(1)" />
    </div>
    <RkPage :currentSize="20"
            :currentPage="pageNum"
            @changePage="(pageNum) => handleFetch(pageNum)"
            :total="total" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Action, Mutation, Getter } from 'vuex-class';

interface Option {
  key: string | number;
  label: string | number;
}

@Component
export default class AlarmTool extends Vue {
  @Getter('durationTime') private durationTime: any;
  @Action('rocketAlarm/GET_ALARM') private GET_ALARM: any;
  @Prop() private total!: number;
  @Prop() private keyword!: string;
  private pageNum: number = 1;
  private alarmErrors: boolean = false;
  private alarmErrorsDesc: string = '';
  private handleFetch(pageNum: number) {
    this.pageNum = pageNum;
    this.GET_ALARM({
      duration: this.durationTime,
      scope: 'Service',
      paging: {
        pageNum,
        pageSize: 20,
        needTotal: true,
      },
      keyword: this.keyword,
    });
  }

  private beforeMount() {
    this.handleFetch(1);
  }
}
</script>

<style lang="scss" scoped>
.rk-alarm-tool {
  border-bottom: 1px solid #c1c5ca41;
  height: 50px;
  background-color: var(--main-bg);
  padding: 0 15px;
  color: #efefef;
  flex-shrink: 0;
}

.rk-alarm-tool-input {
  border-style: unset;
  outline: 0;
  padding: 5px 10px;
  color: #000;
  border-radius: 3px;
  background: #fff;
}

.rk-alarm-tool-div {
  display: flex;
}
</style>
