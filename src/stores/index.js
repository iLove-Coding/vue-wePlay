import Vue from 'vue'
import Vuex from 'vuex'

//1.将vuex作为vue插件，扩展在vue对象原型上面(vue.prototype)
//之后在每一个组件上都有一个属性叫$store
Vue.use(Vuex);

//创建vuex的实例，即store容器
let store = new Vuex.Store({
    //状态，存储整个应用的数据
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {

    },
    modules: {

    }
})

//导出实例
export default store;