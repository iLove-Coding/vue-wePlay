import ChatManager from '../services/websocket/manager/chat.manager'

export const chatHandlerMap = new Map([
  ['2', new ChatManager()],
])