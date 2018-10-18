import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import chatpage from './modules/chatpage'

//1.将vuex作为vue插件，扩展在vue对象原型上面(vue.prototype)
//之后在每一个组件上都有一个属性叫$store
Vue.use(Vuex);

const state = {}

//创建vuex的实例，即store容器
let store = new Vuex.Store({
        //状态，存储整个应用的数据
        state,
        getters,
        actions,
        mutations,
        modules: {
            chatpage
        }
    })

//导出实例
export default store;