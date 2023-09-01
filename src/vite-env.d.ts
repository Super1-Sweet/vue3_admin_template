/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

//   解决vite使用的是ts，ts不识别 .vue 后缀的文件而出现红色波浪线
