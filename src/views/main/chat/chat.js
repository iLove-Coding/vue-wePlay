import HomePage from './homepage';
import OnChat from './onchat'

export default {
    data() {
        return {
            currentView: 'HomePage'
        }
    },
    components: {
        HomePage,
        OnChat
    },
    methods: {
        handleChangeView(comName) {
            this.currentView = comName;
        }
    }
}