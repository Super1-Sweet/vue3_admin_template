<template>
  <!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:href执行用哪一个图标,属性值务必#icon-图标名字 -->
    <use :xlink:href="prefix + 'phone'" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import {} from 'vue'
// 接收父组件传来的数据
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="scss" scoped></style>
