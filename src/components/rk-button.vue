
<template>
  <a class="rk-btn"
     :class="{ size, ghost: ghost }"
     @click.stop="$emit('click')">
    <svg v-if="icon"
         class="icon">
      <use :xlink:href="`#${icon}`"></use>
    </svg>
    <slot />
  </a>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class RkBtn extends Vue {
  @Prop({ default: '' }) private size!: string;
  @Prop({ default: '' }) private icon!: string;
  @Prop({ default: false }) private ghost!: boolean;
}
</script>
<style lang="scss">
.rk-btn {
  display: inline-block;
  line-height: 26px;
  padding: 0 7px;
  background-color: #448dfe;
  border-radius: 4px;
  color: #fff;
  transition: background-color 0.3s;
  .icon {
    margin-top: -2px;
  }
  &.sm {
    line-height: 24px;
  }
  &.lg {
    line-height: 30px;
  }
  &.ghost {
    background-color: transparent;
  }
  &:hover {
    background-color: #357de9;
  }
}
</style>
