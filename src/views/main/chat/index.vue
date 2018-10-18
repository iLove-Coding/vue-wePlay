<template>
    <div class="wp-main-chat">
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
    </div>
</template>

<script src="./chat.js"></script>

<style lang="sass" scoped>
@include b(main-chat) {
    float: left;
    width: 400px;
    background-color: #f9f8fa;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
}
</style>
