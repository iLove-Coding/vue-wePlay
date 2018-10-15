<template>
    <section class="wp-main-chat">
        聊天模块
        <button @click="handleChangeView('Message')">消息</button>
        <button @click="handleChangeView('Contacts')">联系人</button>
        <!-- <Loading></Loading> -->
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
    </section>
</template>
<script src="./chat.js"></script>
<style lang="scss" scoped>
.wp-main-chat {
    float: left;
    width: 30%;
    height: 800px;
    background-color: yellow;
}
</style>
