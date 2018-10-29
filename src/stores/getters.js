import {timeFormat} from '@/config/mUtils';

export default {
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
    }
}