import {timeFormat} from '@/config/mUtils';

export default {
    /**
     * @description 根据聊天信息map生成会话列表
     * @author tong
     * @param {*} state
     * @returns chatList
     */
    chatListGetter(state) {
        let chatList = {};
        Object.keys(state.chatInfoMap).forEach((key) => {
            chatList[key] = {
                time: timeFormat(state.chatInfoMap[key][state.chatInfoMap[key].length - 1].time),
                username: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].username,
                content: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].content,
                noReadNum: (() => {
                    let num = 0;
                    state.chatInfoMap[key].map(elt => {
                        if(!elt.isRead) num++;
                    })
                    return num;
                })()
            }
        })
        return chatList;
    },
    /**
     * @description 好友id与分组id映射
     * @author tong
     * @param {*} state
     * @returns groupIdMap
     */
    friendIdMapGetter(state) {
        let groupIdMap = {};
        state.friendList.forEach(item => {
            let groupId = item.group.groupid;
            item.list.forEach(elt => {
                groupIdMap[elt.id] = {
                    groupId,
                    username: elt.username
                };
            })
        })
        return groupIdMap;
    }
}