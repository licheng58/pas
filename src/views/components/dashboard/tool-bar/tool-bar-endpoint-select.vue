
<template>
  <div class="rk-dashboard-bar-select cp flex-h" v-clickout="
      () => {
        visible = false;
      }
    " :class="{ active: visible }">

    <div class="sm">{{ title+' : ' }}</div>
    <div class="rk-dashboard-bar-i flex-h  miw-200 maw-250" @click="visible = !visible">
      <!-- <svg class="icon lg mr-15">
        <use :xlink:href="`#${icon}`"></use>
      </svg> -->
      <div class="mr-15 rk-dashboard-bar-i-text">

        <div class="selector-ell" v-tooltip:right.ellipsis="current.label || ''" :title="current.label||''">
          {{ current.label }}
        </div>
      </div>
      <svg class="icon lg trans" :style="`transform: rotate(${visible ? 180 : 0}deg)`">
        <use xlink:href="#arrow-down"></use>
      </svg>
    </div>
    <div class="rk-dashboard-sel" v-if="visible">
      <div>
        <input type="text" class="rk-dashboard-sel-search" v-model="search" @change="fliterEndpoints" />
        <svg class="icon sm close" style="margin-top: 3px;" @click="
            search = '';
            fliterEndpoints();
          ">
          <use xlink:href="#clear"></use>
        </svg>
      </div>
      <div class="rk-dashboard-opt-wrapper">
        <EndpointOpt @handleSelect="handleSelect" :class="{ active: i.key === current.key }" v-for="(i, index) in filterData" :key="i.key + index" :data="i" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import EndpointOpt from './tool-bar-endpoint-select-opt.vue';
import { Option } from '@/types/global';
@Component({ components: { EndpointOpt } })
export default class ToolBarEndpointSelect extends Vue {
  @Action('GET_SERVICE_ENDPOINTS') private GET_SERVICE_ENDPOINTS: any;
  @Prop() private data!: Option[];
  @Prop() private current!: Option;
  @Prop() private title!: string;
  @Prop() private icon!: string;
  @Prop() private currentService: any;
  private search: string = '';
  private visible: boolean = false;

  get filterData() {
    return this.data.filter((i: Option) => i.label.toUpperCase().includes(this.search.toUpperCase()));
  }
  private handleOpen() {
    this.visible = true;
  }
  private handleSelect(i: any) {
    this.$emit('onChoose', i);
    this.visible = false;
  }
  private fliterEndpoints() {
    this.GET_SERVICE_ENDPOINTS({ service: this.currentService, keyword: this.search });
  }
}
</script>

<style lang="scss" scoped>
.rk-dashboard-bar-select {
  position: relative;
  z-index: 1;
  height: 52px;
  justify-content: space-between;
  // flex: 1;
  margin-right: 10px;

  .sm {
    line-height: 12px;
  }
  .icon {
    flex-shrink: 0;
  }
}
.rk-dashboard-bar-i-text {
  max-width: 350px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  .selector-ell {
    word-wrap: break-word;
    word-break: break-all;
  }
}
.rk-dashboard-bar-i {
  background: #fff;
  border-radius: 3px;
  padding: 3px 10px;
  margin-left: 5px;
  border-right: 2px solid var(--border-color);
  color: #000;
  border-right: 2px solid var(--border-color);
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.rk-dashboard-sel {
  position: absolute;
  top: 50px;
  left: -1px;
  box-shadow: 0 1px 6px rgba(99, 99, 99, 0.2);
  background-color: var(--main-bg);
  width: 100%;
  border-radius: 0 0 3px 3px;
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
.rk-dashboard-opt {
  padding: 7px 15px;
  &.active,
  &:hover {
    background-color: #40454e;
  }
}
.rk-dashboard-sel-search {
  width: calc(100% - 4px);
  border: 0;
  background-color: var(--main-bg);
  color: #eee;
  outline: 0;
  padding: 7px 25px 7px 10px;
  margin: 2px;
  border-radius: 3px;
}
.rk-dashboard-opt-wrapper {
  overflow: auto;
  max-height: 200px;
  padding-bottom: 2px;
}
</style>
