import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['currentView', 'friendList', 'chatInfoMap']),
    ...mapGetters(['chatListGetter'])
  },
  methods: {
    ...mapMutations(['UPDATE_CURRENT_VIEW', 'UPDATE_NOWCHAT_USER', 'UPDATE_CHATINFO_MAP', 'UPDATE_CHATINFO_HASREAD']),
    chatHandle(userId) {
      console.log(userId)
      this.UPDATE_CURRENT_VIEW('OnChat');
      this.UPDATE_NOWCHAT_USER(userId);
      this.UPDATE_CHATINFO_HASREAD(userId);
    }
  }
}