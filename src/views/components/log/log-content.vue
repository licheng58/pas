

<template>
  <div class="log-container">
    <LogServiceDetail :data="logState.logs || []"
                      :loading="logState.loading"
                      v-if="logState.type.key === 'service'" />
    <LogBrowserDetail :data="logState.logs || []"
                      :loading="logState.loading"
                      v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import LogBrowserDetail from './log-browser-detail.vue';
import LogServiceDetail from './log-service-detail.vue';

@Component({
  components: { LogBrowserDetail, LogServiceDetail },
})
export default class LogContent extends Vue {
  @State('rocketLog') private logState: any;
}
</script>

<style scoped lang="scss">
.log-container {
  overflow: auto;
  padding: 5px 15px 15px;
  height: 100%;
  flex-grow: 1;
}
</style>
