

<template>
  <div class="profile">
    <div class="profile-header">
      <div class="thread"
           :style="`width: ${thread}px`">
        <span class="r cp"
              ref="dragger">
          <svg class="icon">
            <use xlink:href="#settings_ethernet"></use>
          </svg>
        </span>
        Thread Stack
      </div>
      <div class="self">
        Duration (ms)
      </div>
      <div class="exec-ms">
        Self Duration (ms)
        <a class="profile-set-btn"
           @click="updateHighlightTop()"
           v-tooltip:bottom="{ content: 'Highlight top 10 slow methods', popperCls: ['trace-table-tooltip'] }"
           :style="{ color: highlightTop ? '#448dfe' : '#484b55' }">
          top slow
        </a>
      </div>
      <div class="dump-count">
        Dump Count
      </div>
    </div>
    <Item :thread="thread"
          :highlightTop="highlightTop"
          v-for="(item, index) in tableData"
          :data="item"
          :key="'key' + index" />
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import Item from './profile-item.vue';

@Component({ components: { Item } })
export default class ProfileContainer extends Vue {
  @Mutation('profileStore/SET_HIGHLIGHT_TOP') private SET_HIGHLIGHT_TOP: any;
  @Prop() private highlightTop!: boolean;
  @Prop() private tableData!: any[];
  private thread: number = 500;
  private updateHighlightTop() {
    this.SET_HIGHLIGHT_TOP();
  }
  private mounted() {
    const drag: any = this.$refs.dragger;
    drag.onmousedown = (event: any) => {
      const diffX = event.clientX;
      const copy = this.thread;
      document.onmousemove = (documentEvent) => {
        const moveX = documentEvent.clientX - diffX;
        this.thread = copy + moveX;
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
}
</script>
<style lang="scss" scoped>
@import './profile.scss';
.profile {
  font-size: 12px;
  height: 100%;
  .profile-set-btn {
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
    width: 57px;
    overflow: hidden;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    position: absolute;
    top: 4px;
    right: 3px;
    padding: 0 3px;
  }
}
.profile-header {
  white-space: nowrap;
  user-select: none;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.profile-header div {
  display: inline-block;
  padding: 0 4px;
  border: 1px solid transparent;
  border-right: 1px dotted silver;
  line-height: 30px;
  background-color: #f3f4f9;
  padding: 0 4px;
  border: 1px solid transparent;
  border-right: 1px dotted silver;
  overflow: hidden;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
