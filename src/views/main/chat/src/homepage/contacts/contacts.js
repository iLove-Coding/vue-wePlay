import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            nowIndex: -1
        }
    },
    computed: {
        ...mapState(['currentView', 'friendList'])
    },
    mounted() {
        this.lineStatusHandle('10001', 1)
    },
    methods: {
        ...mapMutations(['UPDATE_CURRENT_VIEW', 'UPDATE_FRIEND_STATUS', 'UPDATE_NOWCHAT_USER', 'UPDATE_CHATINFO_HASREAD']),
        displayList(index) {
            this.nowIndex = (this.nowIndex === index) ? -1 : index;
        },
        lineStatusHandle(userId, status) {
            const opt = {
                userId,
                status
            }
            this.UPDATE_FRIEND_STATUS(opt);
        },
        chatHandle(userId) {
            this.UPDATE_CURRENT_VIEW('OnChat');
            this.UPDATE_NOWCHAT_USER(userId);
            this.UPDATE_CHATINFO_HASREAD(userId);
        }
    }
}