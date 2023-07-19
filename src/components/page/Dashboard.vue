<template>
    <div>
       
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('username'),
            staff: {
                name: '张三',
                id: localStorage.getItem('username'),
            },
            id:{
               user_id: localStorage.getItem('username'),
            }
        };
    },
    components: {
        Schart
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            console.log(this.id)
            this.$http.post("http://10.1.0.61:8081/getInfo",this.id,{emulateJSON:true}).then(res =>{
                console.log("manage.getdata:res.body");
                console.log(res.body);
                this.staff=res.body;
                
            },
             res =>{
         //error
            });
        },
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-content-0{
    display: flex;
    align-items: center;
    height: 352px;
    color: #6b6b6b;
}

.grid-content-0:hover{
    cursor: pointer;
    color: #3a3a3a;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: inherit;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-0 .grid-con-icon {
    background: #3a3a3a;
}

.grid-con-0 .grid-num {
    font-size: 50px;
    color: inherit;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-2 .grid-num {
    color: rgb(242, 94, 67);
}

.grid-con-3 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-3 .grid-num {
    color: rgb(100, 213, 114);
}

.grid-con-4 .grid-con-icon {
    background: rgb(242, 224, 67);
}

.grid-con-4 .grid-num {
    color: rgb(242, 224, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.mgb2{
    margin-bottom: 2px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
