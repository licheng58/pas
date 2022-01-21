
<template>
  <div class="flex-v rk-log">
    <LogBar />
    <LogContent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogBar from '@/views/components/log/log-bar.vue';
import LogContent from '@/views/components/log/log-content.vue';
@Component({
  components: {
    LogBar,
    LogContent,
  },
})
export default class Log extends Vue {}
</script>

<style scoped lang="scss">
.rk-log {
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
}
</style>
