<template>
	<div class="register-container">
		<el-form ref="registerForm" :rules="rules" label-width="150px">
			<h1>用户注册</h1>
			<br>
			<el-form-item label="用户姓名"  :required="true" class = "label_width">
			<el-form  ref="username" >
				<el-input  v-model="username" ></el-input>
			</el-form>
			</el-form-item>
			<el-form-item label="用户密码"  :required="true" class = "label_width">
			<el-form  ref="password" >
				<el-input v-model="password" show-password></el-input>
			</el-form>
			</el-form-item>
			<el-form-item label="确认密码"  :required="true" class = "label_width">
			<el-form  ref="password" >
				<el-input v-model="password_2" show-password></el-input>
			</el-form>
			</el-form-item>
			<el-form-item label="既往病史"  :required="true">
			<el-form  ref="diseases">
					<el-form-item v-for="(domain, index) in diseases.domains" :key="domain.key"
						:prop="'domains.' + index + '.value'">
						<el-row :gutter="10">
						  <el-col :span="10"><el-input v-model="domain.value"></el-input></el-col>
						  <el-col :span="12"><el-button type="primary" icon="el-icon-plus" circle @click="addDisease(domain)"></el-button>
						<el-button type="danger" icon="el-icon-delete" circle @click="removeDisease(domain)"></el-button>
						</el-col>
						  
						</el-row>
						
						
					</el-form-item>
				
			</el-form>
			</el-form-item>
			<el-form-item label="是否吸烟" >
				<el-radio-group v-model="smoke">
					<el-radio :label="1">是</el-radio>
					<el-radio :label="0">否</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="是否饮酒" >
				<el-radio-group v-model="alcohol">
					<el-radio :label="1">是</el-radio>
					<el-radio :label="0">否</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="过敏史"  :required="true">
			<el-form ref="allergies">
					<el-form-item v-for="(domain, index) in allergies.domains" :key="domain.key"
						:prop="'domains.' + index + '.value'">
						<el-row :gutter="10">
						  <el-col :span="10"><el-input v-model="domain.value"></el-input></el-col>
						  <el-col :span="12"><el-button type="primary" icon="el-icon-plus" circle @click="addAllergy(domain)"></el-button>
						<el-button type="danger" icon="el-icon-delete" circle @click="removeAllergy(domain)"></el-button>
						</el-col>
						  
						</el-row>
						
						
					</el-form-item>
				
			</el-form>
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
				username:'',
				password:'',
				password_2:'',
				smoke:'',
				alcohol:'',
				diseases: {
					domains: [{
						value: '',
					}],

				},
				allergies:{
					domains:[{
						value:'',
					}],
				},
				rules: {
					
					smoke: [{
						required: true,
						message: '请选择是否吸烟',
						trigger: 'change'
					}, ],
					drink: [{
						required: true,
						message: '请选择是否饮酒',
						trigger: 'change'
					}, ],
				},
			};
		},
		methods: {
			removeDisease(item) {
				console.log('delete')
				var index = this.diseases.domains.indexOf(item)
				if (index !== -1) {
					this.diseases.domains.splice(index, 1)
				}
			},
			addDisease(item) {
				console.log('add')
				this.diseases.domains.push({
				          value: '',
				          key: Date.now()
				        });
			},
			removeAllergy(item) {
				console.log('delete')
				var index = this.allergies.domains.indexOf(item)
				if (index !== -1) {
					this.allergies.domains.splice(index, 1)
				}
			},
			addAllergy(item) {
				console.log('add')
				this.allergies.domains.push({
				          value: '',
				          key: Date.now()
				        });
			},
			submit() {
				if(this.password != this.password_2){
					this.$message('两次输入密码不同，请确认登录密码');
				}else{
					console.log(this.diseases);
					var disease = "";
					for(let i = 0;i<this.diseases.domains.length;i++){
						disease += this.diseases.domains[i].value + "、";
					}
					disease = disease.substring(0,disease.length-1);
					console.log(disease);
					console.log(this.allergies);
					var allergy = "";
					for(let i = 0;i<this.allergies.domains.length;i++){
						allergy += this.allergies.domains[i].value + "、";
					}
					allergy = allergy.substring(0,allergy.length-1);
					this.$http.post("http://10.62.44.169:5000/Register", {
						username : this.username,
						password : this.password,
						smoke: this.smoke,
						alcohol: this.alcohol,
						diseases: disease,
						allergy : allergy
					},
					{
						emulateJSON: true
					}).then(response => { //success
							
							console.log(response.body);
							this.$message('注册成功');
							this.$router.push('/Login');
							
						},
						response => {
							//error
							this.$message('注册失败');
							
						})
				}
				
				// this.$refs.registerForm.validate(async (valid) => {
				// 	if (valid) {
				// 		try {
				// 			const response = await axios.post('/api/register', this.registerData);
				// 			this.$message.success('注册成功');
				// 			// 处理注册成功后的逻辑
				// 		} catch (error) {
				// 			this.$message.error(error.response.data.msg);
				// 		}
				// 	} else {
				// 		return false;
				// 	}
				// });
			}
		},
	};
</script>

<style scoped>
	
	.label_width{
		width: 49%;
	}
	
	.register-container {
		
		
		padding: 20px;
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(../../assets/img/login-bg.jpg);
		background-size: 100%;
		

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
