<template>
    <transition name="wp-mask-fade">
        <wp-chat-popup type="slide-panel" :bottom="true" :mask="true" :closeOnClickMask="true" @mask-click="ClosePanel">
            <div class="wp-chat-slide-panel__main">
                <div class="main-title">{{explain}}</div>
                <div class="main-btn" @click="eventHandle">{{btnTip}}</div>
            </div>
            <div class="wp-chat-slide-panel__cancel" @click="ClosePanel">
                <slot name="btn-sub">取消</slot>
            </div>
        </wp-chat-popup>
    </transition>
</template>
<script>
    export default {
        name: 'wp-chat-slide-panel',
        props: {
            explain: {
                default: '',
                type: String
            },
            btnTip: {
                default: '',
                type: String
            }
        },
        methods: {
            ClosePanel() {
                this.$emit('mask-click');
            },
            eventHandle() {
                 this.$emit('event-handle');
            }
        }
    }
</script>
<style lang="scss">
@mixin bottom-translate() {
    .wp-chat-popup--bottom {
        .wp-chat-popup-main {
            transform: translateY(220px);
        }
    }
}
@mixin bottom-transition() {
    .wp-chat-popup--bottom {
        .wp-chat-popup-main {
            transition: .5s;
        }
    }
}
@include b(chat-slide-panel) {
    .wp-chat-popup-main {
        background-color: #e3e3e3;
    }
    @include e(main) {
        height: 124px;
        background-color: rgba(255, 255, 255, .9);
        margin-bottom: 10px;
        .main-title {
            width: 100%;
            height: 70px;
            border-bottom: solid 1px #e4e2e3;
            box-sizing: border-box;
            text-align: center;
            color: #4e4e4e;
            padding: 27px 0;
            font-size: 16px;
            line-height: 16px;
        }
        .main-btn {
            height: 54px;
            width: 100%;
            text-align: center;
            line-height: 54px;
            font-size: 20px;
            color: #d94000;
        }
    }
    @include e(cancel) {
        height: 55px;
        background-color: rgba(255, 255, 255, .9);
        text-align: center;
        line-height: 55px;
        font-size: 20px;
        color: black;
    }
}

@include b(mask-fade-enter) {
    opacity: 0;
    @include bottom-translate;
}

@include b(mask-fade-leave-to) {
    opacity: 0;
    @include bottom-translate;
}

@include b(mask-fade-enter-active) {
    transition: .5s;
    @include bottom-transition;
}

@include b(mask-fade-leave-active) {
    transition: .5s;
    @include bottom-transition;
}
</style>
