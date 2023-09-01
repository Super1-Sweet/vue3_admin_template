// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pageination from './Pageination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局对象
const allGloablComponent = { SvgIcon, Pageination }
// 对外暴露插件对象
export default {
  // app由main.js中app.use()调用传递过来
  install(app: any) {
    Object.keys(allGloablComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGloablComponent[key])
    })
    // 将所有icon图标引入注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
