import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/index.ts'
import pinia from './store'
// 引入ElementPlus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// svg需要的配置代码
import 'virtual:svg-icons-register'
import './styles/index.scss'
// 配置element-plus国际化
// ts-ignore代表ts忽略类型检测
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, // element-plus国际话配置
})

// 引入并安装自定义插件
import gloablComponent from './components/index.ts'
app.use(gloablComponent)
// console.log(import.meta.env);

// import axios from '@/utils/require.ts'

// 注册模板路由
app.use(router)

// 注册pinia
app.use(pinia)
// 将应用挂载到挂载点上
app.mount('#app')
