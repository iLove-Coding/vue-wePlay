import { mapState } from 'vuex'
import HomePage from './src/homepage'
import OnChat from './src/onchat'
import Group from './src/group'
import FriendInfo from './src/friendInfo'

export default {
    components: {
        HomePage,
        OnChat,
        Group,
        FriendInfo
    },
    computed: {
        ...mapState(['currentView'])
    }
}