import store from '@/stores/'
import BaseHandle from '../base.service'

export default class ChatManager extends BaseHandle {
  constructor(msg) {
    super();
    this.msg = msg;
    this.init(msg);
  }
  handleResponse() {

  }
  handlePush() {

  }
}