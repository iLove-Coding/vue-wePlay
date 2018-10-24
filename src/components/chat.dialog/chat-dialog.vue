<template>
    <transition name="wp-dialog-fade">
        <wp-chat-popup type="dialog" :center="true" :mask="true" :closeOnClickMask="false" @mask-click="CloseDialog">
            <div class="wp-chat-dialog__main">
                <h2 class="wp-chat-dialog__head">{{title}}</h2>
                <p class="wp-chat-dialog__explain">{{explain}}</p>
                <div class="wp-chat-dialog__input">
                    <input type="text" v-model="val">
                </div>
                <div class="wp-chat-dialog__btnset">
                    <slot name="btnset">
                        <a class="btn btn-cancel" :href="_cancelBtn.href" @click="CloseDialog">{{_cancelBtn.text}}</a>
                        <a class="btn btn-confirm" :href="_confirmBtn.href">{{_confirmBtn.text}}</a>
                    </slot>
                </div>
            </div>
        </wp-chat-popup>
    </transition>
</template>
<script>
    export default {
        name: 'wp-chat-dialog',
        data() {
            return {
                val: ''
            }
        },
        props: {
            title: {
                default: '',
                type: String
            },
            explain: {
                default: '',
                type: String
            },
            _cancelBtn: {
                type: Object,
                default: () => {
                    return {
                        href: '#',
                        text: '取消'
                    }
                }
            },
            _confirmBtn: {
                type: Object,
                 default: () => {
                    return {
                        href: '#',
                        text: '确定'
                    }
                }
            }
        },
        methods: {
            CloseDialog() {
                this.$emit('cancel-dialog');
            }
        }
    }
</script>
<style lang="sass">
@mixin center-transition() {

}
@include b(chat-dialog) {
    @include e(main) {
        width: 320px;
        background-color: white;
        border-radius: 10px;
    }
    @include e(head) {
        text-align: center;
        font-size: 22px;
        font-weight: normal;
        padding: 20px 0 10px 0;
    }
    @include e(explain) {
        text-align: center;
        font-size: 18px;
        margin-bottom: 8px;
    }
    @include e(input) {
        width: 86%;
        height: 36px;
        margin: 0 auto;
        margin-bottom: 22px;
        input {
            width: 100%;
            height: 100%;
            border: solid 1px #eaeaea;
            border-radius: 5px;
        }
    }
    @include e(btnset) {
        display: flex;
        height: 50px;
        border-top: solid 1px #eeeeee;
        .btn {
            flex: 1;
            text-align:center;
            font-size: 20px;
            line-height: 50px;
            color: black;
            &:nth-of-type(1) {
                border-right: solid 1px #eeeeee;
            }
        }
    }
}


@include b(dialog-fade-enter-active) {
    animation: dialog-fadein 0.4s;
    .wp-chat-dialog__main {
        animation: dialog-zoom 0.4s;
    }
}


@keyframes dialog-fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
