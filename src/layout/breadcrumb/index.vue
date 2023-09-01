<template>
  <el-icon style="margin: 0 10px" @click="changeFold">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $router.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="transform: translateY(3px)">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import useLayoutSettingStore from '../../store/modules/setting.ts'

// 获取用户配置相关仓库
let layoutSettingStore = useLayoutSettingStore()
let changeFold = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
const $router = useRoute() /*  */
console.log($router.matched)
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>
<style lang="scss" scoped></style>
