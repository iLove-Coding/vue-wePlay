<template>
    <div class="wp-main-chat__contacts">
        <ul class="select-tab">
            <li class="tab-item"><i class="icon-ali-mn_tianjiahaoyou_fill"></i></li>
            <li class="tab-item"><i class="icon-ali-nav_client"></i></li>
            <li class="tab-item"><i class="icon-ali-shuaxin1"></i></li>
        </ul>
        <ul class="group-list">
            <li class="group-item" v-for="(item, index) in friendList" :key="index">
                <header class="group-title" @click="displayList(index)">
                    <div :class="['item-icon', {unfolder: index===nowIndex}]"><i class="icon-ali-jiantouyou"></i></div>
                    <div class="item-name">{{item.groupname}}</div>
                    <p class="item-num">
                        <span>{{item.onNum}}</span>
                        <span>/</span>
                        <span>{{item.allNum}}</span>
                    </p>
                </header>
                <ul class="group-friend" v-show="index===nowIndex">
                    <li class="friend-item" v-for="elt in item.list" v-if="elt.status===1" :key="elt.id" @click="chatHandle">
                        <div class="item-photo"></div>
                        <div class="item-info">
                            <p class="i-name">{{elt.name}}</p>
                            <p class="i-state">[在线]</p>
                        </div>
                    </li>
                    <li class="friend-item" v-for="elt in item.list" v-if="elt.status===0" :key="elt.id" @click="chatHandle">
                        <div class="item-photo outline"></div>
                        <div class="item-info">
                            <p class="i-name">{{elt.name}}</p>
                            <p class="i-state">[离线]</p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
   </div>
</template>
<script src="./contacts.js"></script>
<style lang="sass" scoped>
@mixin tab-item-style() {
    background-image: -webkit-linear-gradient(bottom, #5c90f7, #59b2f7, #5dc1f8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 62px;
}

@include b(main-chat) {
    @include e(contacts) {
        background-color: #f9f8fa;
        height: calc(100% - 50px);
        box-sizing: border-box;
        border-top: solid 1px transparent;
        overflow-y: scroll;
        .select-tab {
            height: 90px;
            background: white;
            box-sizing: border-box;
            margin: 15px 0;
            display: flex;
            justify-content: space-between;
            .tab-item {
                flex: 1;
                text-align: center;
                line-height: 90px;
                .icon-ali-mn_tianjiahaoyou_fill {
                    @include tab-item-style;
                }
                .icon-ali-nav_client {
                    @include tab-item-style;
                }
                .icon-ali-shuaxin1 {
                    @include tab-item-style;
                }
            }
        }
        .group-list {
            background-color: white;
            border-top: solid 1px #e5e5e5;
            .group-item {
                .group-title {
                    display: flex;
                    height: 50px;
                    line-height: 50px;
                    box-sizing: border-box;
                    padding: 0 20px 0 10px;
                    cursor: pointer;
                    .item-icon {
                        color: #c3c3c3;
                        margin-right: 10px;
                        transition: 0.2s;
                        &.unfolder {
                            transform: rotate(90deg);
                            transition: 0.2s;
                        }
                    }
                    .item-name {
                        font-size: 20px;
                    }
                    .item-num {
                    margin-left: auto;
                    color: #bababa;
                    letter-spacing: -2px;
                    }
                }
                .group-friend {
                    .friend-item {
                        height: 64px;
                        box-sizing: border-box;
                        padding-left: 10px;
                        display: flex;
                        .item-photo {
                            width: 50px;
                            height: 50px;
                            border-radius: 25px;
                            background-color: green;
                            margin-top: 7px;
                            margin-right: 10px;
                            position: relative;
                            &.outline {
                                &:after {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    background: rgba(255, 255, 255, .5);
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 25px;
                                }
                            }
                        }
                        .item-info {
                            width: calc(100% - 60px);
                            border-bottom: solid 1px #d8d8d8;
                            box-sizing: border-box;
                            padding: 8px 0;
                            .i-name {
                                font-size: 18px;
                            }
                            .i-state {
                                font-size: 14px;
                                color: #8e8e8e;
                            }
                        }
                         &:nth-last-of-type(1) {
                            .item-info {
                                border-bottom: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
