<template>
    <wp-chat-page class="wp-main-chat-home">
        <header class="wp-main-chat-home__head">
            <div class="head-user">
                <img src="@/assets/img/timg.png" alt="">
            </div>
            <div class="head-tab">
                <div :class="['tab-btn', {selected: isSelectMessage}]" @click="handleChangeView('Message')">消息</div>
                <div :class="['tab-btn', {selected: !isSelectMessage}]" @click="handleChangeView('Contacts')">联系人</div>
            </div>
            <div class="head-icon head-icon--group" v-if="isSelectMessage"><i class="icon-ali-add"></i></div>
            <div class="head-icon head-icon--friend" v-else><i class="icon-ali-zuguanli"></i></div>
        </header>
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
    </wp-chat-page>
</template>
<script src="./homepage.js"></script>
<style lang="scss" scoped>
@include b(main-chat-home) {
    float: left;
    width: 400px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    background-color: #f9f8fa;
    @include e(head) {
        display: flex;
        justify-content: space-between;
        height: 50px;
        background: linear-gradient(to right, #5c90f7, #59b2f7, #5dc1f8);
        .head-user {
            width: 42px;
            height: 42px;
            background-color: white;
            border-radius: 21px;
            margin: 4px 0 0 5px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .head-tab {
            display: flex;
            justify-content: space-between;
            width: 120px;
            height: 30px;
            margin-top: 10px;
            background: linear-gradient(to right, #5c90f7, #59b2f7, #5dc1f8);
            color: white;
            overflow: hidden;
            border-radius: 15px;
            box-sizing: border-box;
            border: solid 1px white;
            font-size: 14px;
            line-height: 28px;
            cursor: pointer;
            .tab-btn {
                flex: 1;
                text-align: center;
                &.selected {
                    background-color: white;
                    color: #4890c5;
                }
            }
        }
        .head-icon {
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            .icon-ali-add {
                color: white;
                font-size: 30px;
            }
            .icon-ali-zuguanli {
                color: white;
                font-size: 24px;
            }
        }
    }
}
</style>
