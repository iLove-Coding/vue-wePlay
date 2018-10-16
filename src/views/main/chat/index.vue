<template>
    <section class="wp-main-chat">
        <header class="wp-main-chat__head">
            <div class="head-user"></div>
            <div class="head-tab">
                <div class="tab-btn" @click="handleChangeView('Message')">消息</div>
                <div class="tab-btn" @click="handleChangeView('Contacts')">联系人</div>
            </div>
            <div class="head-icon"></div>
        </header>
         <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
    </section>
</template>
<script src="./chat.js"></script>
<style lang="scss" scoped>
@include b(main-chat) {
    float: left;
    width: 400px;
    background-color: white;
    position: relative;
    @include e(head) {
        display: flex;
        justify-content: space-between;
        height: 50px;
        background-color: yellow;
        .head-user {
            width: 50px;
            height: 50px;
            background-color: blue;
        }
        .head-tab {
            display: flex;
            justify-content: space-between;
            width: 150px;
            .tab-btn {
                flex: 1;
            }
        }
    }
}
</style>
