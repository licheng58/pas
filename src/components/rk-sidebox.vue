
<template>
  <div>
    <div class="rk-sidebox-backdrop" v-show="show" @click="handleHide"></div>

    <aside class="rk-sidebox flex-v" v-if="destroyOnClose ? destroyOnClose && show : true" :style="updateStyle()">
      <div class="rk-sidebox-title">
        <span class="title">{{ this.title }}</span>
        <div class="r rk-sidebox-close" @click="handleHide">
          <svg class="icon">
            <use xlink:href="#close"></use>
          </svg>
        </div>
      </div>
      <div class="rk-sidebox-inner" :class="{ 'rk-sidebox-inner-fixed': fixed }">
        <slot />
      </div>
    </aside>
  </div>
</template>
<script lang="js">
        // tslint:disable
  export default {
    name: 'RkSidebox',
    props: {
      show: {
        default: false,
      },
      title: {
        default: '',
      },
      right: {
        default: false,
      },
      fixed: {
        default: false,
      },
      width: {
        default: '550px',
      },
      destroyOnClose: {
        default: false,
      }
    },

    data(){
return{
  isCollapse:JSON.parse(localStorage.getItem('isCollapse'))||false
}
    },

    methods: {
      updateStyle() {
        return this.show ? this.destroyOnClose ? '' : `width:calc(${this.width});${this.right ? 'right:0' : 'left:0'}` : `width:${this.width};${this.right ? 'right' : 'left'}:-${this.width}`
      },
      handleHide() {
        this.$emit('update:show', false);
        this.$emit('closeSideboxCallback');
      },
    },
  };
</script>

<style lang="scss">
.rk-sidebox-backdrop {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(31, 33, 38, 0.2);
  z-index: 199;
}
.rk-sidebox {
  overflow-y: auto;
  transition: all 0.3s;
  position: fixed;
  right: 0;
  top: 50px;
  bottom: 0;
  z-index: 200;
  background-color: #fff;
}
.rk-sidebox-inner {
  padding: 0 20px;
}
.rk-sidebox-inner-fixed {
  height: 100%;
  padding: 0;
  overflow: auto;
}
.rk-sidebox-title {
  font-size: 16px;
  width: 100%;
  padding-left: 20px;
  line-height: 35px;
}
.rk-sidebox-close {
  position: absolute;
  right: 18px;
  top: 5px;
  cursor: pointer;
  color: #000;
  transition: color 0.3s;
  background-color: #ddd;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 18px;
    height: 20px;
  }
  &:hover {
    color: #3d92ff;
  }
}
.rk-sidebox-magnify {
  cursor: pointer;
  color: #d8d8d8;
  transition: color 0.3s;
  .icon {
    width: 18px;
    height: 20px;
  }
  &:hover {
    color: #3d92ff;
  }
}
</style>
