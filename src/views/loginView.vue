<template>
<div class="login-body">
    <!-- 登陆框div -->
    <div class="login-container">
        <!-- 登陆框头部logo部分 -->
        <div class="head">
            <div class="name">
                <div class="title">Let's ReVue</div>
                <div class="tips">前端监控系统</div>
            </div>
        </div>
        <el-form label-position="top" :rules="rules" :model="ruleForm" ref="ruleForm" class="login-form">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
                <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    localSet
} from '@/utils/login'
export default {
    data() {
        return {
            ruleForm: {
                username: '', // 账号
                password: '', // 密码
            },
            rules: {
                username: [{
                    required: 'true',
                    message: '请输入',
                    trigger: 'blur'
                }, {
                    min: 3,
                    max: 10,
                    message: '长度在 3 到 10 个字符',
                    trigger: 'blur'
                }],
                password: [{
                    required: 'true',
                    message: '密码不能为空',
                    trigger: 'blur'
                }, {
                    min: 3,
                    max: 10,
                    message: '长度在 3 到 10 个字符',
                    trigger: 'blur'
                }]
            },
            checked: true,
        }
    },
    methods: {
        submitForm(formName) {
            console.log(1)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123456') {
                        this.$router.push({
                            path: '/homeView'
                        })
                        localSet('token', '123456');
                    } else if (this.ruleForm.username !== 'admin') {
                        alert('用户名错误')
                    } else if (this.ruleForm.password !== '123456') {
                        alert('密码错误')
                    }
                } else {
                    alert('不符合输入规则');
                    return false;
                }
            });
        },
    },

}
</script>

<style scoped>
.login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #466AEB;
    height: 100vh;
}

.login-container {
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}

.head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
}

.head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.head .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
}

.head .tips {
    font-size: 12px;
    color: #999;
}

.login-form {
    width: 70%;
    margin: 0 auto;
}

.login-form>>>.el-form--label-top .el-form-item__label {
    padding: 0;
}

.login-form>>>.el-form-item {
    margin-bottom: 0;
}

.el-form-item {
    text-align: left;
}
.logo {
    background-size: cover;
}
</style>
