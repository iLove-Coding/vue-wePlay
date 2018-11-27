import { UPDATE_CURRENT_VIEW, LOAD_FRIEND_LIST, UPDATE_FRIEND_STATUS, UPDATE_NOWCHAT_USER, UPDATE_CHATINFO_MAP, UPDATE_CHATINFO_HASREAD } from './mutation.types';
import Vue from 'vue';

export default {
  [UPDATE_CURRENT_VIEW](state, value) {
    state.currentView = value
  },
  [LOAD_FRIEND_LIST](state, value) {
    state.friendList = value
  },
  [UPDATE_FRIEND_STATUS](state, opt) {
    state.friendList.map(elt => {
      elt.list.map(item => {
        if (item.id === opt.userId) {
            item.status = opt.status;
        }
      })
    });
  },
  [UPDATE_NOWCHAT_USER](state, value) {
    if(!value) {
      state.nowChatUser = {};
      return;
    }
    state.friendList.map(elt => elt.list.forEach(item => {
      if(item.id === value) {
          state.nowChatUser = item;
      }
    }))
  },
  [UPDATE_CHATINFO_MAP](state, opt) {
    const chatId = opt.id;
    if(state.chatInfoMap[chatId]) {
      Vue.set(state.chatInfoMap, chatId, [
        ...state.chatInfoMap[chatId],
        {
          time: opt.time,
          username: opt.username,
          content: opt.content,
          type: opt.type,
          isRead: opt.isRead,
          isSend: opt.type===1?opt.isSend:true
        }
      ])
    } else {
      Vue.set(state.chatInfoMap, chatId, [
        {
          time: opt.time,
          username: opt.username,
          content: opt.content,
          type: opt.type,
          isRead: opt.isRead,
          isSend: opt.type===1?opt.isSend:true
        }
      ])
    }
  },
  [UPDATE_CHATINFO_HASREAD](state, value) {
    if(state.chatInfoMap[value]) {
      state.chatInfoMap[value].forEach(elt => {
        elt.isRead = true;
      })
    }
  }
}