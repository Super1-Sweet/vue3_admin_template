<template>
  <div class="scroll-container">
    <ul class="scroll-list" ref="listRef">
      <!-- <transition-group name="fade" tag="ul" class="scroll-list" > -->
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'zebra-stripe': index % 2 === 0 }"
      >
        {{ item }}
      </li>
      <!-- </transition-group> -->
      <!-- <li v-for="(item, index) in items" :key="index">{{ item }}</li> -->
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const listRef = ref(null)
    const items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
    ]
    let timerId = null
    let offsetY = 0
    const itemHeight = 30

    const startScroll = () => {
      timerId = setInterval(() => {
        offsetY -= itemHeight
        listRef.value.style.transform = `translateY(${offsetY}px)`

        if (offsetY <= -itemHeight * items.length) {
          offsetY = 0
          listRef.value.style.transform = `translateY(${offsetY}px)`
        }
      }, 2000)
    }

    onMounted(() => {
      startScroll()
    })

    onBeforeUnmount(() => {
      clearInterval(timerId)
    })

    return {
      listRef,
      items,
    }
  },
}
</script>

<style>
.scroll-container {
  height: 150px;
  overflow: hidden;
}

.scroll-list {
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 0.5s;
}

.scroll-list li {
  height: 30px;
  line-height: 30px;
}
.scroll-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.zebra-stripe {
  background-color: #f5f5f5;
}
</style>
