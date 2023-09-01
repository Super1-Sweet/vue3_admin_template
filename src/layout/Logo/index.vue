<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p v-show="!layoutSettingStore.fold" class="title">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// 引入设置
import setting from '../../setting'
import useLayoutSettingStore from '../../store/modules/setting.ts'
// 获取用户配置相关仓库
let layoutSettingStore = useLayoutSettingStore()
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base_menu_logo_height;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
  p {
    font-size: $base_menu_title_size;
    line-height: 40px;
  }
}
.title {
  transition: all 0.5s;
}
</style>
