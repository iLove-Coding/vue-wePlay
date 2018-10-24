<template>
    <transition name="wp-mask-fade">
        <wp-chat-popup type="loading" :center="true" :mask="true" @mask-click="ClosePanel">
            <div class="wp-chat-loading__icon"></div>
            <p class="wp-chat-loading__txt">loading...</p>
        </wp-chat-popup>
    </transition>
</template>
<script>
    export default {
        name: 'wp-chat-loading',
        methods: {
            ClosePanel() {
                this.$emit('mask-click');
            }
        }
    }
</script>
<style lang="sass">
@include b(mask-fade-enter) {
    opacity: 0;
}

@include b(mask-fade-leave-to) {
    opacity: 0;
}

@include b(mask-fade-enter-active) {
    transition: .5s;
}

@include b(mask-fade-leave-active) {
    transition: .5s;
}
</style>
