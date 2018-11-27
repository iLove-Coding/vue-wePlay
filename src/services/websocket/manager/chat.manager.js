import store from '@/stores/'
import BaseHandle from '../base.service'
import { au } from '@/plugins/audio/audio'

export default class ChatManager extends BaseHandle {
  constructor(msg) {
    super();
    this.msg = msg;
  }
  handleResponse() {

  }
  handlePush(msg) {
    const { serverTime, text, sendXf } = msg;
    const param = {
      id: sendXf,
      time: serverTime,
      content: text,
      username: store.getters['friendIdMapGetter'][sendXf].username,
      type: 2,
      isRead: store.state.nowChatUser.id === sendXf ? true : false
    };
    store.commit('UPDATE_CHATINFO_MAP', param);
    au.playOnline();
  }
}