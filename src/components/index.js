import ChatPageComponent from './chat.page/chat-page'
import LoadingComponent from './loading/loading';
import ErrorComponent from './error/error';
import Vue from 'vue'

const components = [ ChatPageComponent, LoadingComponent, ErrorComponent ];

  const install = () => {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }

  export default {
    install
  }
