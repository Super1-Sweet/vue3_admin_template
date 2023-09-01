// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user/index.ts'
// 引入数据类型
import { loginForm, loginResponseData } from '@/api/user/type.ts'
import { UserState } from './types/type'
// 获取本地存储数据和读取数据方法
import { SET_TOKEN, GET_TOKEN } from '../../utils/token'

// 引入路由（常量路由）
import { constantRoute } from '../../router/routers'
// 创建
let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 本地存储获取用户唯一标识
      menuRoutes: constantRoute,
    }
  },
  // 异步|逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)
      // 成功200
      if (result.code === 200) {
        this.token = result.data.token as string
        // 本地持久化存储一份
        SET_TOKEN(result.data.token as string)
        // 能保证async函数返回一个成功的Promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
