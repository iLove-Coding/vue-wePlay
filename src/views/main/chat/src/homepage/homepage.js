import Message from './message';
import Contacts from './contacts';

export default {
    data() {
        return {
            currentView: 'Message',
            isSelectMessage: true
        }
    },
    components: {
        Message,
        Contacts
    },
    methods: {
        handleChangeView(comName) {
            this.currentView = comName;
            this.isSelectMessage = comName === 'Message' ? true : false;
        }
    }
}