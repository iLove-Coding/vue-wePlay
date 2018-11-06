<template>
    <transition name="wp-debug-fade">
        <div class="wp-debug" v-drag="{setDrag}">
            <div class="wp-debug__button" @click="debugHandle">debug</div>
            <div class="wp-debug__panel" v-show="isDebugShow">
                <div>登陆后行为</div>
                <button @click="loadFriendListHandle">获取好友列表</button>
                <div>好友上线/离线状态切换</div>
                <button @click="friendStatusHandle('10001',1)">猪哥哥上线（10001）</button>
                <button @click="friendStatusHandle('10001',0)">猪哥哥下线（10001）</button>
                <div>收到会话：</div>
                <button @click="chatTypeHandle(1)">类型1（新会话）</button>
                <button @click="chatTypeHandle(2)">类型2（已存在）</button>
                <button @click="chatTypeHandle(3)">类型3（正在聊天）</button>
            </div>
        </div>
     </transition>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { friendList, receiveMsgType1, receiveMsgType2, receiveMsgType3 } from '@/config/mock'
export default {
    name: 'wp-debug',
    data() {
        return {
            isDebugShow: false,
            isDrag: false
        }
    },
    computed: {
        ...mapState(['nowChatUser']),
        ...mapGetters(['friendIdMapGetter'])
    },
    directives: {
        drag(el, binding) {
             el.onmousedown = function(e){
                binding.value.setDrag(true)
                const maxHeight = window.innerHeight-el.offsetHeight;

                let disx = e.clientX - el.offsetLeft;
                let disy = e.clientY - el.offsetTop;

                document.onmousemove = function (e){
                    let l = e.clientX - disx;
                    let t = e.clientY - disy;
                    if(t<0) t=0;
                    if(l<0) l=0;

                    if(t>maxHeight) t=maxHeight;
                    if(l>1600) l=1600;

                    el.style.left = l+'px';
                    el.style.top = t+'px';
                }

                document.onmouseup = function(){
                    binding.value.setDrag(false)
                    document.onmousemove = document.onmouseup = null;
                }
            }
        }
    },
    inject: [ 'soundManager' ],
    methods: {
        ...mapMutations(['LOAD_FRIEND_LIST', 'UPDATE_FRIEND_STATUS', 'UPDATE_CHATINFO_MAP']),
        debugHandle(el) {
            if(this.isDrag) return;
            this.isDebugShow = !this.isDebugShow;
        },
        setDrag(bool) {
            setTimeout(() => {
                 this.isDrag = bool;
            }, 200)
        },
        loadFriendListHandle() {
            this.LOAD_FRIEND_LIST(friendList);
        },
        friendStatusHandle(userId, status) {
             const opt = {
                userId,
                status
            }
            this.UPDATE_FRIEND_STATUS(opt);
        },
        chatTypeHandle(type) {
            let receiveMsg;
            switch(type) {
                case 1:
                    receiveMsg = receiveMsgType1;
                    break;
                case 2:
                    receiveMsg = receiveMsgType2;
                    break;
                case 3:
                    receiveMsg = receiveMsgType3;
                    break;
            }
            const param = {
                id: receiveMsg.id,
                time: new Date().getTime(),
                content: receiveMsg.content,
                username: this.friendIdMapGetter[receiveMsg.id].username,
                type: receiveMsg.type,
                isRead: this.nowChatUser.id===receiveMsg.id ? true : false
            };
            this.UPDATE_CHATINFO_MAP(param);
            this.soundManager.playOnline();
        }
    }
}
</script>
<style lang="scss" scoped>
@include b(debug) {
	position: fixed;
	right: 0;
	top: 0;
    max-width: 400px;
    z-index: 10000;
	@include e(button) {
		float: left;
		width: 70px;
		height: 36px;
        text-align: center;
        line-height: 36px;
		background-color: yellow;
        cursor: pointer;
	}
	@include e(panel) {
		float: left;
		width: calc(100% - 80px);
		height: 500px;
		background-color: rgba(0,0,0,.4);
        overflow-y: scroll;
	}
}
</style>
