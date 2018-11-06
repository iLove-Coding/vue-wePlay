<template>
    <div class="wp-login">
        <div class="wp-login__outerbox">
            <div class="wp-login__parallax">
                <div>
                    <div class="bg"></div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div class="wp-login__parallax2">
                <div></div>
                <div></div>
            </div>
            <div class="wp-login__bottom-mask"></div>
        </div>
        <login-component></login-component>
    </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped>
@include b(login) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: blue;
    @include e(outerbox) {
        will-change: contents;
    }
}
</style>
