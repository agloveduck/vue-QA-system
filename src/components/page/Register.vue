<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerData" :rules="rules" label-width="100px">
      <h1>用户注册</h1>
	  <br>
	  <el-row>
	    <el-col :span="16">
			<el-form-item label="用户名" >
			  <el-input v-model="registerData.username"  :disabled="false"></el-input>
			</el-form-item>
			<el-form-item label="用户密码" prop="password">
			  <el-input type="password" v-model="registerData.password"></el-input>
			</el-form-item>
		</el-col>
	    <el-col :span="8">
			  <el-upload
			    class="avatar-uploader"
			    :show-file-list="false"
			    :on-success="handleAvatarSuccess"
			    :before-upload="beforeAvatarUpload"
			  >
			    <img v-if="registerData.avatarUrl" :src="registerData.avatarUrl" class="avatar">
			    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			  </el-upload>
	
		</el-col>
	  </el-row>
      
      
      
      <el-form-item label="既往病史">
        <el-input type="textarea" v-model="registerData.history"></el-input>
      </el-form-item>
      <el-form-item label="是否吸烟" prop="smoke">
        <el-radio-group v-model="registerData.smoke">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否饮酒" prop="drink">
        <el-radio-group v-model="registerData.drink">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="过敏史">
        <el-input type="textarea" v-model="registerData.allergy"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
import Register from './Register.vue'

export default {
  data() {
    return {
      registerData: {
        username: '',
        avatar: null,
        avatarUrl: null,
        password: '',
        history: '',
        smoke: '',
        drink: '',
        allergy: '',
      },
      // rules: {
      //   username: [
      //     { required: true, message: '请输入用户名', trigger: 'blur' },
      //   ],
      //   password: [
      //     { required: true, message: '请输入密码', trigger: 'blur' },
      //   ],
      //   smoke: [
      //     { required: true, message: '请选择是否吸烟', trigger: 'change' },
      //   ],
      //   drink: [
      //     { required: true, message: '请选择是否饮酒', trigger: 'change' },
      //   ],
      // },
    };
  },
  methods: {
    handleAvatarSuccess(response) {
      this.registerData.avatarUrl = URL.createObjectURL(response.file);
      this.registerData.avatar = response
	   },
	    beforeAvatarUpload(file) {
	      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	      if (!isJpgOrPng) {
	        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
	      }
	      const isLt2M = file.size / 1024 / 1024 < 2;
	      if (!isLt2M) {
	        this.$message.error('上传头像图片大小不能超过 2MB!');
	      }
	      return isJpgOrPng && isLt2M;
	    },
	    submit() {
	      this.$refs.registerForm.validate(async (valid) => {
	        if (valid) {
	          try {
	            const response = await axios.post('http://localhost:5000/register', this.registerData);
	            this.$message.success('注册成功');
	            // 处理注册成功后的逻辑
	          } catch (error) {
	            this.$message.error(error.response.data.msg);
	          }
	        } else {
	          return false;
	        }
	      });
	    },
	  },
	  };
	  </script>
	  
<style scoped>
	.register-container {
	    max-width: 600px;
	    margin: 0 auto;
	    padding: 20px;
		background-image: url(../../assets/img/login-bg.jpg);
	    
	}
	  
	.avatar {
	    width: 10px;
	    height: 10px;
	    
	    border-radius: 50%;
	}
	  
	.avatar-uploader-icon {
	    font-size: 5px;
	    color: #999;
	}
	  
	.avatar-uploader {
	    
	    align-items: center;
	    justify-content: center;
	    width: 10px;
	    height: 10px;
		border-left: 5px;
		border-top: 5px;
		border-bottom: 5px;
	    border: 1px dashed #999;
	    border-radius: 50%;
	    cursor: pointer;
	}
</style>
