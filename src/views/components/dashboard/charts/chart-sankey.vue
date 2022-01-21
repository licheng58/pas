

<template>
  <RkEcharts ref="chart"
             :option="option"
             :autoResize="true" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ChartSankey extends Vue {
  @Prop() private title!: string;
  @Prop() private data!: any;
  @Prop() private intervalTime!: any;
  get option() {
    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        backgroundColor: 'rgb(50,50,50)',
        textStyle: {
          fontSize: 13,
          color: '#ccc',
        },
        formatter: (a: any) => a.data.tip,
      },
      series: [
        {
          type: 'sankey',
          left: '30px',
          top: '20px',
          bottom: '20px',
          label: {
            formatter: (a: any) => a.data.content,
          },
          animation: false,
          color: ['#bf99f8', '#3fe1da', '#6be6c1', '#3fcfdc', '#626c91', '#3fbcde', '#a0a7e6', '#3fa9e1', '#96dee8'],
          data: this.data.nodes,
          links: this.data.calls,
          itemStyle: {
            borderWidth: 0,
          },
          lineStyle: {
            color: 'source',
            opacity: 0.12,
          },
        },
      ],
      visualMap: this.data.visualMap,
    };
  }
}
</script>
