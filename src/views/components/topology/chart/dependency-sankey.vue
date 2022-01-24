

<template>
  <RkEcharts height="100%"
             :option="optionConfigs"
             :clickEvent="clickLinks" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DependencySankey extends Vue {
  @Prop() private data: any;

  get optionConfigs() {
    return {
      tooltip: {
        trigger: 'item',
      },
      series: {
        type: 'sankey',
        left: 40,
        top: 20,
        right: 300,
        bottom: 40,
        emphasis: { focus: 'adjacency' },
        data: this.data.nodes,
        links: this.data.calls,
        label: {
          color: '#fff',
          formatter: (param: any) => param.data.name,
        },
        color: ['#3fe1da', '#6be6c1', '#3fcfdc', '#626c91', '#3fbcde', '#a0a7e6', '#3fa9e1', '#96dee8', '#bf99f8'],
        itemStyle: {
          borderWidth: 0,
        },
        lineStyle: {
          color: 'source',
          opacity: 0.12,
        },
        tooltip: {
          position: 'bottom',
          formatter: (param: { data: { serviceName: string; destServiceName: string }; dataType: string }) => {
            if (param.dataType === 'edge') {
              return `${param.data.serviceName} -> ${param.data.destServiceName}`;
            }
            return param.data.serviceName;
          },
        },
      },
    };
  }

  private clickLinks(params: any) {
    if (params.dataType === 'edge' && params.data) {
      this.$emit('showMetrics', params.data);
    }
  }
}
</script>
