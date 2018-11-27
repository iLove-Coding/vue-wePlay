export const friendList = [
    {
        group: {
            groupid: 1,
            groupname: '我的好友'
        },
        list: [{
                id: '10001',
                username: '猪哥哥',
                status: 0
            },
            {
                id: '10002',
                username: '多啦a梦',
                status: 0
            },
            {   id: '10003',
                username: '工藤新一',
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
                username: '樱桃小丸子',
                status: 0
            },
            {
                id: '10005',
                username: '绿巨人',
                status: 0
            },
            {   id: '10006',
                username: '美国队长',
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
                username: '女巫',
                status: 0
            },
            {
                id: '10008',
                username: '南瓜灯',
                status: 0
            },
            {   id: '10009',
                username: '小胖墩',
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
                username: '小虎',
                status: 0
            },
            {
                id: '10011',
                username: '大熊',
                status: 0
            },
            {   id: '10012',
                username: '小伊',
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
                username: '静香',
                status: 0
            },
            {
                id: '10014',
                username: '草莓',
                status: 0
            },
            {   id: '10015',
                username: '柠檬',
                status: 1
            }]
    }
];
/**
 * 类型1（新会话）-- 工藤新一
*/
export const receiveMsgType1 = {
    msgId: '2',
    sendXf: '10003',
    serverTime: new Date().getTime(),
    text: '你好',
    type: 2,
    ret: 1
}
/**
 * 类型2（已存在) --猪哥哥
*/
export const receiveMsgType2 = {
    msgId: '2',
    sendXf: '10002',
    time: new Date().getTime(),
    content: '么么哒',
    type: 2,
    ret: 1
}
/**
 * 类型3（正在聊天） --哆啦a梦
*/
// export const receiveMsgType3 = {
//     id: '10002',
//     time: new Date().getTime(),
//     content: '哦哦，好嘞',
//     type: 2
// }

export const receiveMsgType3 = {
  msgId: 2,
  sendXf: '10002',
  text: '哦哦，好嘞',
  serverTime: new Date().getTime(),
  type: 2,
  ret: 1
}