import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '首页' }
                },
                {
                    path: '/QA',
                    name: 'QA',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/QA.vue'),
                    meta: { title: '问答系统' }
                },
                {
                    path: '/MedicineNetwork',
                    name: 'MedicineNetwork',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/MedicineNetwork.vue'),
                    meta: { title: '医疗图谱' }
                },{
					path:'/Register',
					name: 'Register',
					component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Register.vue'),
					meta:{title:'注册界面'}
				},{
					path:'/login',
					name:'login',
					component:()=>import(/* webpackChunkName: "tabs" */ '../components/page/Login.vue'),
					meta:{titlr:'登录'}
				},{
					path:'/healthinfo',
					name:'healthinfo',
					component:()=>import(/* webpackChunkName: "tabs" */ '../components/page/Healthinfo.vue'),
					meta:{titlr:'健康信息录入'}
				}
            ]
        }
    ]
});
