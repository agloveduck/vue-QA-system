<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-read"></i> 应用
				</el-breadcrumb-item>
				<el-breadcrumb-item>问答系统</el-breadcrumb-item>
			</el-breadcrumb>
		</div>

		<div class="container">
			
 			<div class="personcard">
				
				<div class="padding-bottom:5px">
					&nbsp;您的健康卡片：
				</div>
				<el-card class="box-card">
					<el-row :gutter="10">
						<el-col :span="4">
							
							<div class="user-avator">
								<img src="../../assets/img/img1.jpg" />
							</div>
							<div class="user-name">
								{{formUser.username}}
							</div>
						</el-col>
						<el-col :span="20">
							<div class="text_item">
								吸烟史：{{formUser.smoke}}       
							</div>
							<div class="text_item">
								既往病史：{{formUser.diseases}}
							</div>
							<div class="text_item">
								过敏史：{{formUser.allergies}}
							</div>
						</el-col>
					</el-row>
				</el-card>
			</div> 
			<div>
				&nbsp;请输入您的问题：
			</div>
			<div class="handle-box">

				<el-input v-model="formData.question" placeholder="请输入问题" class="handle-input mr10"></el-input>
				<el-button type="primary" icon="el-icon-search" @click="handleSearch">提交</el-button>
			</div>
			<div>
				&nbsp;热门搜索：

				<el-link type="primary" @click="HandleClick($event)" >肺癌的症状有哪些？</el-link>
				<el-link type="primary" @click="HandleClick($event)">胃癌可以吃哪些药物？</el-link>
				<el-link type="primary" @click="HandleClick($event)">肺癌术后可以吃哪些食物？</el-link>
				
			</div>
		</div>
		<div class="container">

			<div class="answer">
				<b>{{formAnswer.answer}}</b>
				
			</div>
		</div>

		<div class="container">
			<div class="pic_container" v-if="medicineNetFlag">
				<medicinenet :networkdata="medicineNetworkData"></medicinenet>
			</div>
		</div>


	</div>
</template>

<script>
	import MedicineNetwork from "./MedicineNetwork.vue";
	export default {
		name: 'basetable',
		data() {
			return {
				medicineNetFlag: false,
				medicineNetworkData: {
					links: [],
					nodes: []
				},
				formData: {
					question: ""
				},
				formAnswer: {
					answer: ""
				},
				formUser:{
					username : '',
					smoke : "无",
					alcohol : "无",
					disease : [],
					diseases : "",
					allergy : [],
					allergies : "",
				},
				username :'',
			};

		},
		components: {
			medicinenet: MedicineNetwork
		},
		beforeCreate() {
			this.username = localStorage.getItem("username");
			console.log(this.username);
			this.$http.post("http://localhost:5000/GetUser",{
				username : this.username,
			}, {
				emulateJSON: true
				
			}).then(response => { //success
					console.log( response.body);
					this.formUser.username = response.body.username;
					if(response.body.smoke == 1){
						this.formUser.smoke = "是";
					}else{
						
					}
					if(response.body.alcohol == 1){
						this.formUser.alcohol = "是";
					}else{
						
					}
					let disease = response.body.disease;
					this.formUser.disease = disease;
					for(let i = 0;i < disease.length;i++){
						this.formUser.diseases += disease[i] + "、";
					}
					this.formUser.diseases = this.formUser.diseases.substring(0,this.formUser.diseases.length-1);
					if(this.formUser.disease == ""){
						this.formUser.diseases = "无";
					}
					let allergy = response.body.allergy;
					this.formUser.allergy = allergy;
					console.log(this.formUser.allergy == "");
					
					for(let i = 0;i < allergy.length ;i++){
						this.formUser.allergies += allergy[i] + "、";
					}
					this.formUser.allergies = this.formUser.allergies.substring(0,this.formUser.allergies.length-1);
					if(this.formUser.allergy == ""){
						this.formUser.allergies = "无";
					}
					
				},
				response => {
					//error
					console.log('我恨你'+response);
			
				},2000);
		},
		created() {
			this.username = localStorage.getItem("username");
		},
		methods: {
			// 触发搜索按钮
			handleSearch() {
				console.log(this.formData);
				console.log(this.username);
				this.$http.post("http://localhost:5000/QuestionSubmit", {
					username : this.username,
					question : this.formData.question,
				},
				{
					emulateJSON: true
				}).then(response => { //success
						
						console.log(response.body);
						this.formAnswer.answer = response.body.answer[0];
						this.medicineNetworkData.links = response.body.links;
						this.medicineNetworkData.nodes = response.body.nodes;
						console.log(this.medicineNetworkData);
						this.medicineNetFlag = true;
					},
					response => {
						//error
						
					})
			},
			HandleClick(event) {
				console.log("--ok--",event.currentTarget.innerText);
				var ques = event.currentTarget.innerText;
				this.formData.question = ques;
				this.$http.post("http://localhost:5000/QuestionSubmit", {
					username : this.username,
					question : this.formData.question,
				},
				{
					emulateJSON: true
				}).then(response => { //success
						
						console.log(response.body);
						this.formAnswer.answer = response.body.answer[0];
						this.medicineNetworkData.links = response.body.links;
						this.medicineNetworkData.nodes = response.body.nodes;
						console.log(this.medicineNetworkData);
						this.medicineNetFlag = true;
					},
					response => {
						//error
						
					})
				
			}
			
		}
	};
</script>

<style scoped>
	.news-tips {
		color: #606266;
		font-size: 18px;
		height: 35px;
		margin-bottom: 20px;
	}

	.handle-box {
		margin-bottom: 20px;
	}

	.handle-select {
		width: 120px;
	}

	.handle-input {
		width: 300px;
		display: inline-block;
	}

	.table {
		width: 100%;
		font-size: 14px;
	}

	.red {
		color: #ff0000;
	}

	.mr10 {
		margin-right: 10px;
	}

	.table-td-thumb {
		display: block;
		margin: auto;
		width: 40px;
		height: 40px;
	}

	.demo-table-expand {
		font-size: 0;
	}

	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}

	.demo-table-expand .el-form-item {
		margin-left: 60px;
		margin-right: 0;
		margin-bottom: 0;
		width: 80%;
	}

	.personcard {
		padding-top: 5px;
		padding-bottom: 10px;
		width: 60%;
	}

	.user-avator img {
		display: block;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		padding-bottom: 10px;
	}

	.user-name {
		padding-left: 12px;
	}
	.text_item{
		text-align: left;
		padding-top: 5px;
	}
</style>
