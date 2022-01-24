<template>
  <el-container>
    <!-- 侧边栏 -->
    <p-aside :isCollapse='isCollapse' @handleCrigger='handleCrigger' :style="{width:isCollapse?'':'171px'}" />
    <el-container>

      <!-- 头部 -->
      <el-header>
        <RkHeader />
      </el-header>

      <!-- 页面出口 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
/* tslint:disable */
import pAside from '@/components/p-aside.vue';
import pHeader from '@/components/p-header.vue';
import RkHeader from '@/views/components/common/rk-header.vue';
export default {
  components: { pAside, pHeader, RkHeader },
  data () {
    return {
      isCollapse: JSON.parse(localStorage.getItem('isCollapse')) || false, //侧边栏切换
    };
  },

  methods: {
    // 切换侧边栏
    handleCrigger (val) {
      this.isCollapse = val;
      localStorage.setItem('isCollapse', JSON.stringify(val));
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.el-header {
  // background-color: var(--main-bg);
  height: 50px !important;
  line-height: 50px;
  padding: 0;
}

.el-main {
  padding: 0;
}
</style>