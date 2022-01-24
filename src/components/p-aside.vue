<template>
  <div class="aside">
    <!-- logo位置 :style="{color:$route.path === '/home'?'#409eff':'#fff'}"-->
    <div class="p-logo" @click="()=>$router.push('/home')">
      <img src="../assets/img/p-logo.png" alt="">
      <span v-show="!isCollapse">Primeton</span>
    </div>

    <el-menu :collapse="isCollapse" :collapse-transition='false' :default-active="$route.path.split('/')[1]||'/'" :default-openeds="defalutOpens" active-text-color="#fff" class="el-menu-vertical-demo"
      router text-color="#fff">
      <p-menuItem :isCollapse="isCollapse" :menuList="menuList" style="overflow: auto;
    height: 100%;"></p-menuItem>
    </el-menu>

    <!-- 缩进按钮 -->
    <div class="trigger" @click="handleCrigger">
      <i :class="!isCollapse?'el-icon-s-fold':'el-icon-s-unfold'"></i>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
/* tslint:disable */
import pMenuItem from './p-menuItem';
import { routes } from '@/router';
export default {
  components: {
    pMenuItem,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      activeIndex: '0',
      defalutOpens: ['/'],
    };
  },

  computed: {
    menuList: () => {
      return routes[0].children;
    },
  },

  methods: {
    // 侧边栏缩进
    handleCrigger () {
      this.$emit('handleCrigger', !this.isCollapse);
    },
  },
};
</script>

<style lang='scss' scoped>
.el-menu {
  border-right: none;
  background-color: var(--main-color);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 171px;
  min-height: 400px;
}

.p-logo img {
  width: 20px;
}

.p-logo span {
  color: #fff;
  font-size: 24px;
  margin-left: 10px;
}

.p-logo {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg);
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
}

.el-menu--collapse {
  width: auto;
}

.trigger {
  font-size: 24px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  text-align: center;
}
::v-deep .sidebar-item {
  overflow: hidden !important;
}
</style>