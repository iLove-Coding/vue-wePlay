<template>
    <transition name="wp-mask-fade">
        <wp-chat-popup type="slide-panel" :center="true" :mask="true" @mask-click="ClosePanel">
            <div class="loading-wrap">
                <div class="loading-icon"></div>
                <p class="loading-txt">loading...</p>
            </div>
        </wp-chat-popup>
    </transition>
</template>
<script>
    export default {
        name: 'wp-loading',
        methods: {
            ClosePanel() {
                this.$emit('mask-click');
            }
        }
    }
</script>
<style lang="sass" scoped>
@include b(chat-popup) {
    @include m(center) {
        .loading-wrap {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
        }
    }
}

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
