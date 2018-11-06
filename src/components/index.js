import DebugComponent from './debug/debug';
import ChatPageComponent from './chat.page/chat-page';
import ChatPopupComponent from './chat.popup/chat-popup';
import ChatDialogComponent from './chat.dialog/chat-dialog'
import ChatSlidePanelComponent from './chat.slide.panel/chat-slide-panel';
import ChatLoadingComponent from './chat.loading/chat-loading';
import ChatErrorComponent from './chat.error/chat-error';
import Vue from 'vue'

const components = [ DebugComponent, ChatPageComponent, ChatPopupComponent, ChatDialogComponent, ChatSlidePanelComponent, ChatLoadingComponent, ChatErrorComponent ];

const install = () => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
