import { mapState, mapMutations } from 'vuex'

export default {
    data () {
        return {
            sendMsg: '',
            showSlidePanel: '',
            testObj: ['开发建设的肌肤苏东坡看看；来了；开门开门开门疯狂的什么饭看电视免费看吗','开发建设的肌肤苏东坡看看；来了；开门开门开门疯狂的什么饭看电视免费看吗','开发建设的肌肤苏东坡看看；来了；开门开门开门疯狂的什么饭看电视免费看吗','开发建设的肌肤苏东坡看看；来了；开门开门开门疯狂的什么饭看电视免费看吗','开发建设的肌肤苏东坡看看；来了；开门开门开门疯狂的什么饭看电视免费看吗','开发建设的肌肤苏东坡看看；来了；开门开门开门疯狂的什么饭看电视免费看吗']
        }
    },
    computed: {
        ...mapState(['currentView', 'friendList', 'nowChatUser'])
    },
    activated () {
        this.scrollToBottom();
    },
    watch: {
        testObj() {
          this.scrollToBottom();
        }
    },
    methods: {
        ...mapMutations(['UPDATE_CURRENT_VIEW']),
        scrollToBottom() {
            this.$nextTick(() => {
                let container = this.$el.querySelector(".js-chat-content-box");
                container.scrollTop = container.scrollHeight;
                console.log(container.scrollTop);
              })
        },
        sendHandle() {
            if (this.sendMsg === '') return;
            this.testObj.push(this.sendMsg);
            this.sendMsg = '';
        },
        pageHandle(str) {
            this.UPDATE_CURRENT_VIEW(str);
        },
        slidePanelHandle(str) {
            if (str === 'block') {
                this.showSlidePanel = '';
            }
            this.showSlidePanel = str;
        }
    }
}
