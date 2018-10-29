import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState(['currentView', 'friendList', 'chatInfoMap']),
        ...mapGetters(["chatListGetter"])
    },
    methods: {
        ...mapMutations(['UPDATE_CURRENT_VIEW', 'UPDATE_NOWCHAT_USER', 'UPDATE_CHATINFO_MAP', 'UPDATE_CHATINFO_HASREAD']),
        test() {
            console.log(this.friendList)
        },
        chatHandle(userId) {
            this.UPDATE_CURRENT_VIEW('OnChat');
            this.UPDATE_NOWCHAT_USER(userId);
            this.UPDATE_CHATINFO_HASREAD(userId);
        },
        receiveHandle() {
            const param = {
                id: '10005',
                time: new Date().getTime(),
                username: '多啦a梦2',
                content: '嗯嗯',
                type: 2,
                status: 1,
                isRead: false
            }
            this.UPDATE_CHATINFO_MAP(param);
        }
    }
}