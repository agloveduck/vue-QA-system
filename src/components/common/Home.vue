<template>
    <div class="wrapper">
		<div id = "homehead">
			<v-head></v-head>
		</div>
        
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
			isLogin:false,
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
	beforeCreate() {
		this.isLogin = this.$route.query.isLogin
		if(this.isLogin == true){
			this.$emit('homehead');
		}
	},
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    },
	mounted(){
		
	}
};
</script>
