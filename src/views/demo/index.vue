<template>
    <div>
        <Loading></Loading>
        <Error></Error>
        <button @click="slidePanelHandle">测试slide-panel组件按钮</button>
        <wp-chat-slide-panel v-show="isVisible" @mask-click="ClosePopup">
            <template slot="explain">
                该分组下还有好友存在，删除后好友会移至默认分组
            </template>
            <template slot="btn-main">
                删除
            </template>
        </wp-chat-slide-panel>
    </div>
</template>
<script>
    import ApiMixin from '@/mixins/api.mixin'
    export default {
        mixins: [ApiMixin],
        methods: {
            ClosePopup() {
                this.hide();
            },
            slidePanelHandle() {
                this.show();
            }
        }
    }
</script>
