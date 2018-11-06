<template>
    <div class="wp-login-box">
        <div class="wp-login-box__main">
            <div class="wp-login-box__content">
                <h2 class="content-title">账号密码登录</h2>
                <h3 class="content-subtitle">请使用您的<span>旋风号</span>登录</h3>
                <div class="content-input input-userid">
                    <input type="text" placeholder="请输入您的账号">
                </div>
                <div class="content-input input-pwd">
                    <input type="password" placeholder="密码">
                </div>
                <div class="content-btn login-btn">登录</div>
            </div>
            <div class="wp-login-box__bottom">
                <a class="bottom-btn" href="#">忘记密码</a>
                <a class="bottom-btn" href="#">注册新账号</a>
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
        padding-top: 25px;
    }
    @include e(content) {
        .content-title {
            font-size: 24px;
            font-weight: normal;
            margin-bottom: 16px;
        }
        .content-subtitle {
            font-weight: normal;
            font-size: 16px;
            margin-bottom: 16px;
            span {
                color: #4782c9;
                margin: 0 5px;
            }
        }
        .content-input {
            input {
                width: 400px;
                height: 42px;
                border: solid 1px #e1e1e1;
                margin-bottom: 15px;
                border-radius: 6px;
                font-size: 14px;
                &:focus {
                    border-color: #4782c9;
                }
            }
        }
        .content-btn {
            margin: 0 auto;
            width: 402px;
            height: 46px;
            background-color: #97ca4d;
            color: white;
            border-radius: 6px;
            line-height: 46px;
            cursor: pointer;
        }
    }
    @include e(bottom) {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 10px 28px;
        .bottom-btn {
            font-size: 14px;
            color: #666666;
            &:nth-of-type(1) {
                position: relative;
                margin-right: 5px;
                &:after {
                    content: '';
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 14px;
                    width: 2px;
                    background-color: #c0c0c0;
                }
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>