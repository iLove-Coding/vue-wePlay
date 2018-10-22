<template>
    <main class="wp-chat-page">
        <slot></slot>
    </main>
</template>
<script>
    export default {
        name: 'wp-chat-page'
    }
</script>
<style lang="sass" scoped>
.wp-chat-page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
}
</style>
