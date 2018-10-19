import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['friendList'])
    },
    methods: {
        test() {
            console.log(this.friendList)
        }
    }
}