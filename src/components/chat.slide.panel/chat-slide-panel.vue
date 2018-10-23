<template>
    <transition name="wp-mask-fade">
        <wp-chat-popup type="slide-panel" :bottom="true" :mask="true" :closeOnClickMask="true" @mask-click="ClosePanel">
            <div class="bottom-wrap">
                <div class="wrap-content">
                    <div class="wrap-title">
                        <slot name="explain"></slot>
                    </div>
                    <div class="wrap-btn">
                        <slot name="btn-main"></slot>
                    </div>
                </div>
                <div class="wrap-cancel" @click="ClosePanel">
                    <slot name="btn-sub">取消</slot>
                </div>
            </div>
        </wp-chat-popup>
    </transition>
</template>
<script>
    export default {
        name: 'wp-chat-slide-panel',
        methods: {
            ClosePanel() {
                this.$emit('mask-click');
            }
        }
    }
</script>
<style lang="scss" scoped>
@include b(chat-popup) {
    @include m(bottom) {
        .bottom-wrap {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 188px;
            width: 100%;
            background-color: #e3e3e3;
            .wrap-content {
                height: 124px;
                background-color: rgba(255, 255, 255, .9);
                margin-bottom: 10px;
                .wrap-title {
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
                .wrap-btn {
                    height: 54px;
                    width: 100%;
                    text-align: center;
                    line-height: 54px;
                    font-size: 20px;
                    color: #d94000;
                }
            }
            .wrap-cancel {
                height: 55px;
                background-color: rgba(255, 255, 255, .9);
                text-align: center;
                line-height: 55px;
                font-size: 20px;
                color: black;
            }
        }
    }
}

@include b(mask-fade-enter) {
    opacity: 0;
    .bottom-wrap {
        transform: translateY(220px);
    }
}

@include b(mask-fade-leave-to) {
    opacity: 0;
    .bottom-wrap {
        transform: translateY(220px);
    }
}

@include b(mask-fade-enter-active) {
    transition: .5s;
    .bottom-wrap {
        transition: .5s;
    }
}

@include b(mask-fade-leave-active) {
    transition: .5s;
    .bottom-wrap {
        transition: .5s;
    }
}
</style>
