const root=document.getElementById('app');

import Vue from "vue";

import router from "./router"; // 路由
import store from "./stores"; // 状态管理

import App from "./views/App"; // 导入App组件
import component from './components';
import './assets/icon-font/iconfont.css'
import './scss';

Vue.use(component);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount(root);
