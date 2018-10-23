<template>
    <div class="wp-main-chat">
        <keep-alive>
            <transition name="component-fade">
                <component :is="currentView"></component>
            </transition>
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
.component-fade-enter-active, .component-fade-leave-active {
    transition: .3s;
}
.component-fade-enter  {
    transform: translateX(100px);
    opacity: 0;
}
.component-fade-leave-to {
   opacity: 0;
}
</style>
