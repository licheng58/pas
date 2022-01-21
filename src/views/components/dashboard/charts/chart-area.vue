

<template>
  <ChartLine ref="chart"
             :data="data"
             :intervalTime="intervalTime"
             :type="'areaChart'" />
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import ChartLine from './chart-line.vue';

@Component({
  components: { ChartLine },
})
export default class ChartArea extends Vue {
  @Prop() private data!: any;
  @Prop() private intervalTime!: any;
}
</script>
