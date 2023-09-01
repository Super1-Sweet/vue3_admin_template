<template>
  <router-view></router-view>
  <!-- <svg width="900px" height="600px" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path id="path1" d="M10 80 Q 52.5 10, 95 80 T 180 80" fill="transparent" stroke="black"/>
  <path id="path1" stroke-width="2" fill="transparent" stroke="black" d="m289.77678,224.0641c-34,-14.79094 -285,-17.79094 -286,-106.50871c-1,-88.71777 415.99999,-110.3554 434.99999,-111.3554c19,-1 461.99999,9.12196 461.99999,101.42509c0,92.30313 -355,118.64808 -371,127.74564c-16,9.09756 -74,41.99652 -80,102.82927" />
  <circle r="5" fill="red" >
    <animateMotion dur="3s"  repeatCount="indefinite">
      <mpath href="#path1"/>
    </animateMotion>
  </circle>
</svg>
<button class="rainbow-button" >Click me!</button> -->
</template>

<script setup lang="ts">
// import anime from 'animejs/lib/anime.es.js';
import { onMounted, computed } from 'vue'

computed
// import req from './api/user/index.ts'
onMounted(() => {
  // const elements = document.querySelector('.green');
  // const pathsty = document.querySelector('.pathsty');
  // const path = anime.path(pathsty);
  // anime({
  //   targets: elements,
  //   translateX: path('x'),
  //   translateY: path('y'),
  //   rotate: path('angle'),
  //   easing: 'linear',
  //   duration: 10000,
  //   loop: true
  // });
  // const getBase64Image = (img: any) => {
  //     const canvas= document.createElement('canvas')
  //     canvas.width = img.width
  //     canvas.height = img.height
  //     const ctx: any = canvas.getContext('2d')
  //     ctx.drawImage(img, 0, 0, img.width, img.height)
  //     const dataURL = canvas.toDataURL('image/png') // 可选其他值 image/jpeg
  //     return dataURL
  //   }
  //   const main = (src: string, cb: any) => {
  //     const image = new Image()
  //     image.src = `${src}?v=${Math.random()}` // 处理缓存
  //     image.crossOrigin = '*' // 支持跨域图片
  //     image.onload = function () {
  //       const base64 = getBase64Image(image)
  //       if (cb) {
  //         cb(base64)
  //       }
  //     }
  //   }
  //   main('/public/旋转.svg', function (base64: string) {
  //     console.log(base64);
  //       const newSvg = base64 // oldUrl你转换之前的项目图片地址 base64是已经转换成功的图片地址
  //       const image = new Image()
  //       image.setAttribute('crossOrigin', 'anonymous') // 允许跨域
  //       image.src = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(newSvg)))}` // 给图片对象写入base64编码的svg流
  //       const canvas = document.createElement('canvas') // 准备空画布
  //       canvas.width = 1500 // 设置宽度
  //       canvas.height = 800 // 设置高度
  //       image.onload = function () {
  //         const context: any = canvas.getContext('2d')
  //         context.drawImage(image, 0, 0)
  //         const a = document.createElement('a')
  //         a.download = `xuanzhuan`
  //         a.href = canvas.toDataURL(`image/png`)
  //         a.click()
  //       }
  //     })
  //   req.reqLogin({ username: 'admin', password: '1112111' })
})
</script>

<style lang="scss" scoped>
.box {
  width: 900px;
  height: 1500px;
  background-color: black;
}
.green {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 2rem;
  height: 2rem;
  background: rgba(9, 193, 98, 0.682);
}
.txt {
  font-size: 34px;
}
.cls-1,
.cls-2 {
  fill: none;
}

.cls-1 {
  stroke: #00f4ff;
  stroke-width: 2px;
}

.cls-2 {
  stroke: #3ae0e0;
  stroke-width: 1px;
  fill-rule: evenodd;
}
.svg2 {
  position: absolute;
  top: 531px;
  left: 0;
}
.pathsty {
  color: red;
}
.scroll-container {
  width: 300px; /* 容器宽度 */
  height: 200px; /* 容器高度 */
  overflow: hidden; /* 隐藏溢出内容 */
  position: relative; /* 相对定位用于绝对定位子元素 */
}

.scroll-list {
  position: absolute; /* 绝对定位以实现滚动效果 */
  width: 100%;
}

.scroll-animation-enter-active,
.scroll-animation-leave-active {
  transition: transform 1s ease; /* 过渡动画效果 */
}

.scroll-animation-enter,
.scroll-animation-leave-to {
  transform: translateY(calc(-1em * var(--items-length))); /* 初始位置 */
}
</style>
