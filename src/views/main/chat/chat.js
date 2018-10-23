import { mapState } from 'vuex'
import HomePage from './src/homepage'
import OnChat from './src/onchat'
import GroupManage from './src/groupmanage'
import FriendInfo from './src/friendInfo'

export default {
    components: {
        HomePage,
        OnChat,
        GroupManage,
        FriendInfo
    },
    computed: {
        ...mapState(['currentView'])
    }
}