
<template>
  <div>
    <span class="rk-time-tips"
          v-show="timeRange">{{ $t('timeTips') }}</span>
    <RkDate class="mr-10"
            v-model="time"
            position="bottom"
            format="YYYY-MM-DD HH:mm" />
  </div>
</template>

<script lang="ts">
import timeFormat from '@/utils/timeFormat';

export default {
  data() {
    return {
      timeRange: 0,
    };
  },
  computed: {
    time: {
      get() {
        return [
          (this as any).$store.state.rocketbot.durationRow.start,
          (this as any).$store.state.rocketbot.durationRow.end,
        ];
      },
      set(val: Date[]) {
        (this as any).timeRange = val[1].getTime() - val[0].getTime() > 60 * 24 * 60 * 60 * 1000 ? 1 : 0;
        if ((this as any).timeRange) {
          return;
        }
        (this as any).$store.dispatch('SET_DURATION', timeFormat(val));
      },
    },
  },
};
</script>

<style scoped>
.rk-time-tips {
  color: red;
}
</style>
