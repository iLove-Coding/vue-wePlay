<template>
    <div>
        <button @click="lodingHandle">测试loading组件按钮</button>
        <wp-loading v-show="isLoading" @mask-click="closeLoading"></wp-loading>

        <button @click="slidePanelHandle">测试slide-panel组件按钮</button>
        <wp-chat-slide-panel v-show="isSlidePanel" @mask-click="closeSlidePanel">
            <template slot="explain">
                删除该分组后，组内联系人将移至默认分组
            </template>
            <template slot="btn-main">
                删除分组
            </template>
        </wp-chat-slide-panel>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLoading: false,
                isSlidePanel: false,
            }
        },
        methods: {
            closeLoading() {
                this.isLoading = false;
            },
            lodingHandle() {
                this.isLoading = true;
            },
            closeSlidePanel() {
                this.isSlidePanel = false;
            },
            slidePanelHandle() {
                this.isSlidePanel = true;
            }
        }
    }
</script>
