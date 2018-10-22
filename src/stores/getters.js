export default {
    chatListGetter(state) {
        let chatList = {};
        Object.keys(state.chatInfoMap).forEach((key) => {
            chatList[key] = {
                time: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].time,
                username: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].username,
                font: state.chatInfoMap[key][state.chatInfoMap[key].length - 1].font,
            }
        })
        return chatList;
    }
}