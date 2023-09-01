<template>
  <el-button icon="Refresh" circle @click="refresh" />
  <el-button icon="FullScreen" circle @click="fullScreen" />
  <el-button icon="Setting" circle />
  <img class="dropGif" src="/public/cd3.gif" alt="" />
  <el-dropdown style="line-height: 35px; margin-right: 10px">
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import useLayoutSettingStore from '../../store/modules/setting.ts'
let layoutSettingStore = useLayoutSettingStore()
// 刷新按钮点击回调
let refresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
let fullScreen = () => {
  // dom对象属性用来判断当前是不是全屏模式
  let full = document.fullscreenElement
  // 切换全屏
  if (!full) {
    // 文档根节点的方法requestFullscreen实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}
</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.dropGif {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
