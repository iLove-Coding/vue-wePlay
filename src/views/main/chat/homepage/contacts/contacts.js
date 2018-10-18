export default {
    data() {
        return {
            friendList: [
                {
                    groupid: 1,
                    groupname: '我的好友',
                    list: [{
                            id: 10001,
                            groupid: 1,
                            name: '猪哥哥1',
                            status: 0
                        },
                        {
                            id: 10002,
                            groupid: 1,
                            name: '多啦a梦1',
                            status: 0
                        },
                        {   id: 10003,
                            groupid: 1,
                            name: '工藤新一1',
                            status: 1
                        }]
                },
                {
                    groupid: 2,
                    groupname: '公司',
                    list: [{
                            id: 10004,
                            groupid: 2,
                            name: '猪哥哥2',
                            status: 0
                        },
                        {
                            id: 10005,
                            groupid: 2,
                            name: '多啦a梦2',
                            status: 0
                        },
                        {   id: 10006,
                            name: '工藤新一2',
                            status: 1
                        }]
                },
                {
                    groupid: 3,
                    groupname: '家人',
                    list: [{
                            id: 10007,
                            groupid: 3,
                            name: '猪哥哥3',
                            status: 0
                        },
                        {
                            id: 10008,
                            groupid: 3,
                            name: '多啦a梦3',
                            status: 0
                        },
                        {   id: 10009,
                            name: '工藤新一3',
                            status: 1
                        }]
                },
                {
                    groupid: 4,
                    groupname: '小伙伴',
                    list: [{
                            id: 10010,
                            groupid: 4,
                            name: '猪哥哥4',
                            status: 0
                        },
                        {
                            id: 10011,
                            groupid: 4,
                            name: '多啦a梦4',
                            status: 0
                        },
                        {   id: 10012,
                            groupid: 4,
                            name: '工藤新一4',
                            status: 1
                        }]
                },
                {
                    groupid: 5,
                    groupname: '黑名单',
                    list: [{
                            id: 100013,
                            groupid: 5,
                            name: '猪哥哥5',
                            status: 0
                        },
                        {
                            id: 10014,
                            groupid: 5,
                            name: '多啦a梦5',
                            status: 0
                        },
                        {   id: 10015,
                            groupid: 5,
                            name: '工藤新一5',
                            status: 1
                        }]
                }
            ],
            nowIndex: 1
        }
    },
    mounted() {
        this.onlineHandle(10001)
        this.friendList.map(elt => {
            elt.onNum = elt.list.filter(elt => elt.status === 1).length;
            elt.allNum = elt.list.length;
        });
        console.log(this.friendList);
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