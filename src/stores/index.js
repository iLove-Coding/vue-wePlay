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
    friendList: [
        {
            group: {
                groupid: 1,
                groupname: '我的好友'
            },
            list: [{
                    id: '10001',
                    groupid: 1,
                    username: '猪哥哥1',
                    status: 0
                },
                {
                    id: '10002',
                    groupid: 1,
                    username: '多啦a梦1',
                    status: 0
                },
                {   id: '10003',
                    groupid: 1,
                    username: '工藤新一1',
                    status: 1
                }]
        },
        {
            group: {
                groupid: 2,
                groupname: '公司'
            },
            list: [{
                    id: '10004',
                    groupid: 2,
                    username: '猪哥哥2',
                    status: 0
                },
                {
                    id: '10005',
                    groupid: 2,
                    username: '多啦a梦2',
                    status: 0
                },
                {   id: '10006',
                    username: '工藤新一2',
                    status: 1
                }]
        },
        {
            group: {
                groupid: 3,
                groupname: '家人'
            },
            list: [{
                    id: '10007',
                    groupid: 3,
                    username: '猪哥哥3',
                    status: 0
                },
                {
                    id: '10008',
                    groupid: 3,
                    username: '多啦a梦3',
                    status: 0
                },
                {   id: '10009',
                username: '工藤新一3',
                    status: 1
                }]
        },
        {
            group: {
                groupid: 4,
                groupname: '小伙伴'
            },
            list: [{
                    id: '10010',
                    groupid: 4,
                    username: '猪哥哥4',
                    status: 0
                },
                {
                    id: '10011',
                    groupid: 4,
                    username: '多啦a梦4',
                    status: 0
                },
                {   id: '10012',
                    groupid: 4,
                    username: '工藤新一4',
                    status: 1
                }]
        },
        {
            group: {
                groupid: 5,
                groupname: '黑名单'
            },
            list: [{
                    id: '10013',
                    groupid: 5,
                    username: '猪哥哥5',
                    status: 0
                },
                {
                    id: '10014',
                    groupid: 5,
                    username: '多啦a梦5',
                    status: 0
                },
                {   id: '10015',
                    groupid: 5,
                    username: '工藤新一5',
                    status: 1
                }]
        }
    ],
    nowChatUser: {
        // id: '',
        // groupid: 5,
        // name: '工藤新一5',
        // status: 1
    },
    chatInfoMap: {  // type:1为发送，2为接收
        '10001': [{
            time: new Date().getTime(),
            username: '猪哥哥1',
            content: '加油1',
            type: 1,
            status: false,
            isRead: true
        },
        {
            time: new Date().getTime(),
            username: '猪哥哥1',
            content: '加油2',
            type: 1,
            status: false,
            isRead: true

        }],
        '10002': [{
            time: new Date().getTime(),
            username: '多啦a梦1',
            content: '加油1',
            type: 2,
            status: true,
            isRead: true
        },
        {
            time: new Date().getTime(),
            username: '多啦a梦1',
            content: '明天见',
            type: 2,
            status: true,
            isRead: true
        }],
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