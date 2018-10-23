import ChatPageComponent from './chat.page/chat-page';
import ChatPopup from './chat.popup/chat-popup';
import ChatSlidePanel from './chat.slide.panel/chat-slide-panel';
import LoadingComponent from './loading/loading';
import ErrorComponent from './error/error';
import Vue from 'vue'

const components = [ ChatPageComponent, ChatPopup, ChatSlidePanel, LoadingComponent, ErrorComponent ];

  const install = () => {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }

  export default {
    install
  }
