import LoadingComponent from './loading/loading';
import ErrorComponent from './error/error';
import Vue from 'vue'

const components = [LoadingComponent, ErrorComponent];

  const install = () => {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }

  export default {
    install
  }
