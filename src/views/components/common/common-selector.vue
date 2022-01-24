<template>
  <div class="rk-common-select cp flex-h" v-clickout="
      () => {
        visible = false;
        search = '';
      }
    " :class="{ active: visible }">
    <div class="f-14 mr-10 grey max-c">{{ title }}</div>
    <div class="rk-common-bar-i flex-h" @click="visible = !visible">
      <rk-icon :icon="`${icon}`" class="icon lg mr-15" />
      <div class="mr-15 rk-common-bar-i-text">
        <div class="ell" v-tooltip:right.ellipsis="value.label || ''">
          {{ value.label || '' }}
        </div>
      </div>
      <svg class="icon lg trans" :style="`transform: rotate(${visible ? 180 : 0}deg)`">
        <use xlink:href="#arrow-down"></use>
      </svg>
    </div>

    <div class="rk-common-sel" v-if="visible">
      <div v-if="hasSearch">
        <input type="text" class="rk-common-sel-search" v-model="search" @change="fliterSearch" placeholder="Search..." />
        <svg class="icon sm close" @click="
            search = '';
            fliterSearch();
          " v-if="search">
          <use xlink:href="#clear"></use>
        </svg>
      </div>
      <div class="rk-common-opt-wrapper scroll_bar_style">
        <div class="rk-common-opt ell" @click="handleSelect(i)" :class="{ active: i.key === value.key }" v-for="(i, idx) in filterData" :key="idx">
          {{ i.label || '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CommonSelector extends Vue {
  @Prop() private icon!: string;
  @Prop() private data!: any;
  @Prop() private value!: any;
  @Prop() private title!: string;
  @Prop({ default: false }) private hasSearch!: boolean;

  private search: string = '';
  private visible: boolean = false;

  get filterData() {
    return this.data.filter((i: any) => i.label.toUpperCase().indexOf(this.search.toUpperCase()) !== -1);
  }
  private handleOpen() {
    this.visible = true;
  }
  private handleSelect(i: any) {
    this.$emit('input', i);
    this.visible = false;
  }

  private fliterSearch() {
    this.$emit('search', this.search);
  }
}
</script>

<style lang="scss" scoped>
.rk-common-select {
  position: relative;
  z-index: 1;
  height: 100%;
  justify-content: space-between;
  .sm {
    line-height: 12px;
  }
  .icon {
    flex-shrink: 0;
  }
}
.rk-common-bar-i-text {
  max-width: 150px;
  min-width: 80px;
}
.rk-common-bar-i {
  height: 100%;
  padding: 3px 10px;
  background: #fff;
  color: #000;
  border-radius: 3px;
  margin-right: 10px;
  border-right: 2px solid #252a2f;
}
.rk-common-sel {
  position: absolute;
  top: 32px;
  box-shadow: 0 1px 6px rgba(99, 99, 99, 0.2);
  background-color: var(--main-bg);
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  .close {
    position: absolute;
    right: 10px;
    top: 12px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
}
.rk-common-opt {
  padding: 7px 15px;
  &.active,
  &:hover {
    background-color: #40454e;
  }
}
.rk-common-sel-search {
  width: calc(100% - 4px);
  border: 0;
  background-color: var(--main-bg);
  color: #eee;
  outline: 0;
  padding: 7px 25px 7px 10px;
  margin: 2px;
}
.rk-common-opt-wrapper {
  overflow: auto;
  max-height: 200px;
  padding-bottom: 2px;
}
</style>
