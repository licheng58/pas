
<template>
  <div class="rk-dropdown-item"
       :class="{ active: value === active && active }">
    <div class="ell"
         v-if="!show">
      <svg v-if="detail"
           class="icon sm r"
           @click.stop="show = !show">
        <use xlink:href="#code"></use>
      </svg>
      {{ value }}
    </div>
    <div v-else>
      <svg v-if="detail"
           class="icon sm r"
           @click.stop="show = !show">
        <use xlink:href="#code"></use>
      </svg>
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class RkDropdownItem extends Vue {
  @Prop({ default: false }) private detail!: boolean;
  @Prop() private active!: string | number;
  @Prop() private value!: string | number;
  private show: boolean = false;
}
</script>

<style lang="scss">
.rk-dropdown-item {
  padding: 7px 15px;
  cursor: pointer;
  user-select: none;
  .icon {
    margin-top: 3px;
  }
  &:hover,
  &.active {
    background-color: #40454e;
  }
}
</style>
