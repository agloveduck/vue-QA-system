<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">诊后问答系统</div>
            <el-form :model="form" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="userid">
                    <el-input v-model="form.username"  placeholder="uername">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="form.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
				<el-row>
				  <el-col :span="10"><div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div></el-col>
				  <el-col :span="10"><div class="login-btn">
				    <el-link type="primary" @click="register()">没有账号？点此注册</el-link>
                    
                </div></el-col>
				</el-row>
                
                
            </el-form>
        </div>
    </div>
</template>

<script>
import jsCookie from 'js-cookie';
import Login from "./Login.vue"
import headlthinfo from "./Healthinfo.vue"
export default {
    data(){
        return {
            form: {
                
                password: '',
				username: '',
            },
            rules: {
                userid: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },

    methods: {
    
        submitForm() {
			console.log(this.form.username);
			console.log(this.form.password);
			this.$http.post("http://10.62.44.169:5000/Login", this.form, {
				emulateJSON: true
			}).then(response => { //success
					console.log(response.body);
					this.$message.success('登录成功');
					//localStorage进行数据存储
					localStorage.setItem('token',response.data.token)
					localStorage.setItem('username',this.form.username);
					jsCookie.set("username",this.form.username);
					sessionStorage.setItem("accessToken",this.username);
					this.$router.push({
						path:'/',
						query:{
							isLogin:true,
						}
					});
					
				},
				response => {
					//error
					console.log(response);
					this.$message.success('登录失败');
					console.log("error submit !!");
				},2000);
        },
		register(){
			this.$router.push('healthinfo');
		}
    }
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
	margin-left: 5px;
	margin-right: 5px;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
