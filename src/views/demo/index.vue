<template>
    <div>
        <button @click="lodingHandle">测试loading组件按钮</button>
        <wp-chat-loading v-show="isLoading" @mask-click="closeLoading"></wp-chat-loading>

        <button @click="slidePanelHandle">测试slide-panel组件按钮</button>
        <wp-chat-slide-panel v-show="isSlidePanel"
                             @mask-click="closeSlidePanel"
                             @event-handle="123"
                             explain="删除该分组后，组内联系人将移至默认分组"
                             btnTip="删除分组"
        >
        </wp-chat-slide-panel>

        <button @click="dialogHandle">测试dialog组件按钮</button>
        <wp-chat-dialog v-show="isDialogPanel"
                        @mask-click="dialogHandle"
                        title="添加分组"
                        explain="请输入新分组名称"
                        @cancel-dialog="closeDialog"
        >
        </wp-chat-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLoading: false,
                isSlidePanel: false,
                isDialogPanel: false,
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
            },
            closeDialog() {
                this.isDialogPanel = false;
            },
            dialogHandle() {
                this.isDialogPanel = true;
            }
        }
    }
</script>
