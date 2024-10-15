<template>
    <div >
        <el-form :model="loginForm" ref="loginFormRef">

            <el-form-item label="邮箱账号" prop="email">
                <el-input v-model="loginForm.email" placeholder="邮箱账号" :prefix="Message"></el-input>
            </el-form-item>

            <el-form-item label="账号密码" prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" :prefix="Lock"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login" :loading="isloading">{{ login_text }}</el-button>
            </el-form-item>
            
        </el-form>
    </div>

</template>
  
<script setup lang="ts">
    import { ref,reactive } from 'vue';
    import {Lock,Message} from '@element-plus/icons-vue';
    import { ElMessage } from 'element-plus';
    import axios from 'axios';
    import type { FormInstance, FormRules } from 'element-plus'

    // 定义响应式变量
    const loginForm = reactive({email:"",password:""});
    const loginFormRef = ref<FormInstance>();
    const isloading = ref(false);
    const login_text = ref("登录");

    // 邮箱验证器
    const checkEmail =(rule:any,value: any, callback: any) => {
        if (!value) {
            return callback(new Error('请输入邮箱账号！'))
        }else if (value.type != 'email'){
            return callback(new Error('邮箱格式有误！'))
        }};
        
    // 密码验证是为空
    const checkPassword = (rule:any,value: any, callback: any) => {
        if (!value) {
            return callback(new Error('请输入密码！'))
        }
    };

    // 定义验证规则
    const rules = reactive<FormRules<typeof loginForm>>({
        email:[{validator:checkEmail,trigger: 'blur'}],
        password:[{validator:checkPassword,trigger: 'blur'}]
    })


    async function login(){
        isloading.value = true;
        login_text.value = "登录中..."
        try {
            const response = await axios.post("127.0.0.1:8000/auth/login",{
                'email':loginForm.email,
                'password':loginForm.password
            });
            localStorage.setItem('token',response.data.access_token);
            ElMessage.success("登录成功！");
            isloading.value = false;
            login_text.value = "登录";
        }catch (error:any){
            isloading.value = false;
            login_text.value = "登录";
            ElMessage.error(error.response.data.detail)
        }
    }

</script>

<style scoped>

</style>
  