import ws from './websocket';

export default {
	install(Vue) {
		Vue.prototype.$webSocket = ws;
	}
}