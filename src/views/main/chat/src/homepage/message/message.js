import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState(['currentView', 'friendList'])
    },
    methods: {
        ...mapMutations(['UPDATE_CURRENT_VIEW']),
        test() {
            console.log(this.friendList)
        },
        chatHandle() {
            this.UPDATE_CURRENT_VIEW('OnChat')
        }
    }
}