import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            nowIndex: -1
        }
    },
    computed: {
        ...mapState(['currentView', 'friendList']),
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['UPDATE_CURRENT_VIEW', 'UPDATE_NOWCHAT_USER', 'UPDATE_CHATINFO_HASREAD']),
        displayList(index) {
            this.nowIndex = (this.nowIndex === index) ? -1 : index;
        },
        chatHandle(userId) {
            this.UPDATE_CURRENT_VIEW('OnChat');
            this.UPDATE_NOWCHAT_USER(userId);
            this.UPDATE_CHATINFO_HASREAD(userId);
        }
    }
}