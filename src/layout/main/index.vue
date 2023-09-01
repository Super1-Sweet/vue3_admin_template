<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" v-if="refresh" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import useLayoutSettingStore from '../../store/modules/setting.ts'
let layoutSettingStore = useLayoutSettingStore()

// 控制当前组件是否重新加载
let refresh = ref(true)

watch(
  () => layoutSettingStore.refresh,
  () => {
    refresh.value = false
    // 保证dom元素全部销毁之后在更新
    nextTick(() => {
      refresh.value = true
    })
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  animation: bounce-in 1s;
}
.slide-fade-enter-from {
  animation: bounce-in 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
