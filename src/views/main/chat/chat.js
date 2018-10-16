import Message from './message';
import Contacts from './contacts';

export default {
    data() {
        return {
            currentView: 'Message'
        }
    },
    components: {
        Message,
        Contacts
    },
    methods: {
        handleChangeView(comName) {
            this.currentView = comName;
            this.titleName = this.getTitleName(comName);
        }
    }
}