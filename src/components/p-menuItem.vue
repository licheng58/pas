<template>
  <div class="sidebar-item">
    <div :key="index" v-for="(item, index) in menuList">
      <!-- 显示有子集 -->
      <el-submenu :index="item.path" v-if="item.children&& !item.meta.hidden ">
        <template slot="title">
          <i :class="'icon iconfont icon-'+item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归子集 -->
        <p-menuItem :menuList="item.children"></p-menuItem>
      </el-submenu>

      <!-- 显示无子集 -->
      <el-menu-item :index="item.path" v-else-if="
        !item.children&& !item.meta.hidden 
        ">
        <i :class="'icon iconfont icon-'+item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pMenuItem',
  props: {
    menuList: {
      type: Array,
      default: [],
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
.el-submenu__title i,
.el-menu-item i {
  color: #fff !important;
  margin-right: 10px;
}

::v-deep .el-tooltip {
  padding: 0 10px !important;
}
</style>