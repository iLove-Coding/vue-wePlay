import { mapState } from 'vuex'
import HomePage from './src/homepage'
import OnChat from './src/onchat'
import Group from './src/group'

export default {
    components: {
        HomePage,
        OnChat,
        Group
    },
    computed: {
        ...mapState(['currentView'])
    }
}