import { mapState } from 'vuex'

export default {
    data() {
        return {
            nowIndex: 1
        }
    },
    computed: {
        ...mapState(['friendList'])
    },
    mounted() {
        this.onlineHandle(10001)
        this.friendList.map(elt => {
            elt.onNum = elt.list.filter(elt => elt.status === 1).length;
            elt.allNum = elt.list.length;
        });
        // console.log(this.friendList);
    },
    methods: {
        displayList(index) {
            this.nowIndex = (this.nowIndex === index) ? -1 : index;
        },
        outlineHandle(outid) {
            this.friendList.map(elt => {
                elt.list.map(item => {
                    if (item.id === outid) {
                        item.status = 0;
                    }
                })
            });
        },
        onlineHandle(onid) {
            this.friendList.map(elt => {
                elt.list.map(item => {
                    if (item.id === onid) {
                        item.status = 1;
                    }
                })
            });
        }
    }
}