<template>
    <div class="wp-login-box">
        <div class="wp-login-box__main">
            <div class="wp-login-box__content">
                <div class="content-title">账号密码登录</div>
                <div class="content-input input-userid">
                    <input type="text" placeholder="请输入您的旋风号">
                </div>
                <div class="content-input input-pwd">
                    <input type="password" placeholder="密码">
                </div>
                <div class="content-btn login-btn">登录</div>
            </div>
            <div class="wp-login-box__bottom">
                <a href="">忘记密码</a>
                <a href="">注册新账号</a>
            </div>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="scss" scoped>
@include b(login-box) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .6);
    overflow: hidden;
    @include e(main) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        width: 670px;
        height: 364px;
        border-radius: 20px;
        text-align: center;
        box-sizing: border-box;
        padding: 20px 0;
    }
    @include e(content) {

    }
    @include e(bottom) {

    }
}
</style>