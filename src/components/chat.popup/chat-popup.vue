<template>
    <div class="wp-chat-popup" :class="typeClass">
        <div class="wp-chat-popup__mask" v-show="mask" @click="maskClick"></div>
        <div :class="['wp-chat-popup__container', {'wp-chat-popup--center': center}, {'wp-chat-popup--bottom': bottom}]">
            <div class="wp-chat-popup-main">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'wp-chat-popup',
        props: {
            type: {
                type: String,
                default: ''
            },
            mask: {
                type: Boolean,
                default: false
            },
            center: {
                type: Boolean,
                default: false
            },
            bottom: {
                type: Boolean,
                default: false
            },
            // 是否可以通过点击 mask 关闭 Dialog
            closeOnClickMask: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            typeClass() {
                return this.type ? `wp-chat-${this.type}` : ''
            }
        },
        methods: {
            maskClick() {
                if (this.closeOnClickMask) {
                    this.$emit('mask-click');
                }
            }
        }
    }
</script>
<style lang="sass">
@import '@/scss/variables.scss';
@include b(chat-popup) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    @include e(mask) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $popup-mask-bgc;
        opacity: $popup-mask-opacity;
    }
    @include m(center) {
        .wp-chat-popup-main {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: auto;
        }
    }
    @include m(bottom) {
        .wp-chat-popup-main {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 188px;
            width: 100%;
        }
    }
}
</style>
