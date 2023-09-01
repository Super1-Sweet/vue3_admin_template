<template>
  <div class="">
    <h1>我是首页</h1>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '../../store/modules/user.ts'
import { onMounted } from 'vue'
let userStore = useUserStore()
onMounted(() => {
  console.log(userStore.token)
})
</script>

<style lang="scss" scoped></style>
