<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_left" :class="{ fold: layoutSettingStore.fold }">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="layoutSettingStore.fold"
          background-color="#00142c"
          text-color="#FFF"
          active-text-color="#eb3f79"
          :default-active="$route.path"
        >
          <Menu :menuList="UserStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 头部导航栏 -->
    <div class="layout_top" :class="{ fold: layoutSettingStore.fold }">
      <div class="top_left">
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="top_right">
        <Dropdown></Dropdown>
      </div>
    </div>
    <!-- 中间内容区域 -->
    <div class="layout_content" :class="{ fold: layoutSettingStore.fold }">
      <Main></Main>
      <!-- <el-icon><InfoFilled /></el-icon> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue' // logo标题组件
import Menu from './menu/index.vue' // 菜单组件
import useUserStore from '../store/modules/user' // 获取用户相关的小仓库
import Main from './main/index.vue' // 动态路由
import Breadcrumb from './breadcrumb/index.vue'
import Dropdown from './dropdown/index.vue'
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '../store/modules/setting.ts'
// 获取用户配置相关仓库
let layoutSettingStore = useLayoutSettingStore()
const $route = useRoute() // 获取当前路由地址
let UserStore = useUserStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  position: relative;

  .layout_left {
    width: $left_menu_width;
    height: 100vh;
    background-color: #00142c;
    transition: all 0.5s;
    &.fold {
      width: $base_menu_width_fold;
    }
  }

  .layout_top {
    position: absolute;
    width: calc(100% - $left_menu_width);
    height: $top_nav_height;
    top: 0;
    left: $left_menu_width;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s;
    &.fold {
      width: calc(100vw - $base_menu_width_fold);
      left: $base_menu_width_fold;
    }
  }
  .layout_content {
    position: absolute;
    width: calc(100% - $left_menu_width);
    height: calc(100vh - $top_nav_height);
    top: $top_nav_height;
    left: $left_menu_width;
    padding: 20px;
    overflow: auto;
    transition: all 0.5s;
    p {
      height: 10000px;
    }
    &.fold {
      width: calc(100vw - $base_menu_width_fold);
      left: $base_menu_width_fold;
    }
  }
}
.scrollbar {
  width: 100%;
  height: calc(100vh - $base_menu_logo_height);
  color: #fff;
  .el-menu {
    border-right: none;
  }
}
.top_left {
  // background-color: palevioletred;
  display: flex;
}
.top_right {
  display: flex;
}
</style>
