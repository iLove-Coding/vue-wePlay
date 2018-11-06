<template>
    <div class="wp-main">
        <main-play></main-play>
        <main-chat></main-chat>
    </div>
</template>
<script src="./main.js"></script>
<style lang="scss" scoped>
    @include b(main) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 42px;
        display: flex;
        justify-content: space-between;
        background-color: pink;
    }
</style>
