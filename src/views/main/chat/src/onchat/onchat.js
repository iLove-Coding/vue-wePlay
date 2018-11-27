import { mapState, mapMutations } from 'vuex'

export default {
    data () {
        return {
            sendMsg: '',
            showSlidePanel: ''
        }
    },
    computed: {
        ...mapState(['currentView', 'friendList', 'nowChatUser', 'chatInfoMap'])
    },
    activated () {
        this.scrollToBottom();
    },
    watch: {
        chatInfoMap: {
            deep: true,
            handler() {
                this.scrollToBottom();
            }
        }
    },
    methods: {
        ...mapMutations(['UPDATE_CURRENT_VIEW', 'UPDATE_CHATINFO_MAP', 'UPDATE_NOWCHAT_USER']),
        scrollToBottom() {
            this.$nextTick(() => {
                let container = this.$el.querySelector(".js-chat-content-box");
                container.scrollTop = container.scrollHeight;
              })
        },
        sendHandle() {
            if (this.sendMsg === '') return;
            const param = {
                id: this.nowChatUser.id,
                time: new Date().getTime(),
                username: this.nowChatUser.username,
                content: this.sendMsg,
                type: 1,
                isRead: true,
                isSend: false
            }
            this.UPDATE_CHATINFO_MAP(param);
            this.sendMsg = '';
        },
        pageHandle(str) {
            this.UPDATE_CURRENT_VIEW(str);
            this.UPDATE_NOWCHAT_USER();
        },
        slidePanelHandle(str) {
            if (str === 'block') {
                this.showSlidePanel = '';
            }
            this.showSlidePanel = str;
        }
    }
}
