<template>
    <transition name="wp-mask-fade">
        <wp-chat-popup type="slide-panel" :bottom="true" :mask="true" @mask-click="ClosePanel">
            <div class="bottom-wrap">
                <div class="wrap-content">
                    <div class="wrap-title">
                        <slot name="explain"></slot>
                    </div>
                    <div class="wrap-btn">
                        <slot name="btn-main"></slot>
                    </div>
                </div>
                <div class="wrap-cancel">
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
            left: 10px;
            bottom: 0;
            height: 220px;
            width: calc(100% - 20px);
            .wrap-content {
                height: 140px;
                background-color: rgba(255, 255, 255, .9);
                border-radius: 16px;
                margin-bottom: 10px;
                .wrap-title {
                    width: 100%;
                    height: 86px;
                    border-bottom: solid 1px #e4e2e3;
                    box-sizing: border-box;
                    padding: 20px 38px;
                    text-align: center;
                }
                .wrap-btn {
                    height: 54px;
                    width: 100%;
                    text-align: center;
                    line-height: 54px;
                    font-size: 20px;
                    color: #cb2e32;
                }
            }
            .wrap-cancel {
                height: 54px;
                background-color: rgba(255, 255, 255, .9);
                border-radius: 16px;
                text-align: center;
                line-height: 54px;
                font-size: 20px;
                color: #0038c0;
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
