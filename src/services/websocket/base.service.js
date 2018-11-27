export default class BaseHandle {
  init(msg) {
    this.checkRet(msg);
  }
  checkRet(msg) {
    if(msg.ret === 1) {
      this.handle(msg)
    }
  }
  handle(msg) {
    if(msg.type===0) {
      this.handleResponse()
    } else {
      this.handlePush()
    }
  }
  handleResponse() {}
  handlePush() {}
}