<template>
  <div class="bj">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到我的后台</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
              class="login_psd"
            ></el-input>
          </el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            class="login_btn"
            @click="login"
          >
            登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
// 引入计算早中晚时间函数
import { getTime } from '@/utils/time'
// 引入用户相关的仓库
let userStore = useUserStore()
// 获取form组件
let loginForms = ref()
// 获取路由器
let $router = useRouter()
let loginForm = reactive({ username: 'admin', password: 'atguigu123' })
//自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}
//定义表单校验需要配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'blur' }
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'blur' }
    { trigger: 'change', validator: validatorPassword },
  ],
}
// 用户登录按钮加载
let loading = ref(false)
const login = async () => {
  // 登录前要保证校验必须通过
  await loginForms.value.validate()

  // 点击登录按钮时加载loading
  loading.value = true
  try {
    // 保证登录成功
    await userStore.userLogin(loginForm)

    // 编程式导航跳转到首页
    $router.push('/')
    // 登录成功提示信息

    ElNotification({
      type: 'success',
      message: getTime(),
    })
    // 登录成功后取消loading
    loading.value = false
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
    // 登录失败后取消loading
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.bj {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    width: 500px;
    position: absolute;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 20px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login_psd {
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
