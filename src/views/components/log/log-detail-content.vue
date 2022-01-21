
<template>
  <div class="rk-log-detail">
    <div class="mb-10 clear rk-flex"
         v-for="(item, index) in columns"
         :key="index">
      <template>
        <span class="g-sm-4 grey">{{ $t(item.value) }}:</span>
        <span v-if="item.label === 'timestamp'"
              class="g-sm-8">{{ currentLog[item.label] | dateformat }}</span>
        <textarea class="content"
                  readonly="readonly"
                  v-else-if="item.label === 'content'"
                  v-model="currentLog[item.label]" />
        <span v-else-if="item.label === 'tags'"
              class="g-sm-8">
          <div v-for="(d, index) in logTags"
               :key="index">{{ d }}</div>
        </span>
        <span v-else
              class="g-sm-8">{{ currentLog[item.label] }}</span>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ServiceLogDetail } from './log-constant';

@Component
export default class LogServiceDetailContent extends Vue {
  @Prop() private currentLog: any;
  private columns = ServiceLogDetail;
  private logContent: string = '';

  get logTags() {
    if (!this.currentLog.tags) {
      return [];
    }
    return this.currentLog.tags.map((d: { key: string; value: string }) => {
      return `${d.key} = ${d.value}`;
    });
  }
}
</script>
<style lang="scss" scoped>
.content {
  max-width: 700px;
  min-width: 500px;
  min-height: 500px;
  border: none;
  outline: none;
  color: #3d444f;
  overflow: auto;
}
</style>
