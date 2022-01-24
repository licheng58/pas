
<template>
  <svg class="icon"
       :class="{
      sm: size === 'sm',
      lg: size === 'lg',
      xll: size === 'xll',
      offset: offset,
      loading: loading,
    }">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import '../assets/icons/index';

@Component
export default class RkIcon extends Vue {
  @Prop({ default: '' }) private icon!: string;
  @Prop({ default: '' }) private size!: string;
  @Prop({ default: false }) private loading!: boolean;
  @Prop({ default: false }) private offset!: boolean;
}
</script>

<style lang="scss">
.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  fill: currentColor;
  &.sm {
    width: 13px;
    height: 13px;
  }
  &.lg {
    width: 18px;
    height: 18px;
  }
  &.i-20 {
    width: 20px;
    height: 20px;
  }
  &.xll {
    width: 25px;
    height: 25px;
  }
  &.offset {
    margin-top: -2px;
  }
  &.loading {
    animation: loading 1.5s linear infinite;
  }
}
</style>
