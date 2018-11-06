import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

//1.将vuex作为vue插件，扩展在vue对象原型上面(vue.prototype)
//之后在每一个组件上都有一个属性叫$store
Vue.use(Vuex);

const state = {
    currentView: 'HomePage', // 聊天模块视图切换
    loginUser: {
        id: '10000',
        username: '小猪妹'
    },
    friendList: [],
    nowChatUser: {
        // id: '',
        // groupid: 5,
        // name: '工藤新一5',
        // status: 1
    },
    chatInfoMap: {  // type:1为发送，2为接收
        '10001': [{
            time: new Date().getTime(),
            content: '加油猪妹妹',
            username: '猪哥哥',
            type: 1,
            isRead: true
        },
        {
            time: new Date().getTime(),
            content: '爱你么么哒',
            username: '猪哥哥',
            type: 1,
            isRead: true

        }]
    }
}

//创建vuex的实例，即store容器
let store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
    })

//导出实例
export default store;