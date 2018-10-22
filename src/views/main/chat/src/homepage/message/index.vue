<template>
    <div class="wp-main-chat__message">
        <ul class="message-list">
            <li class="message-item clearfix" @click="chatHandle">
                <div class="item-photo"></div>
                <div class="item-info">
                    <p class="info-line1">
                        <span class="i-name">猪妹妹</span>
                        <span class="i-time">下午6:09</span>
                    </p>
                    <p class="info-line2">
                        <span class="i-content">明天又是元气满满的一天明天又是元气满满的一天明天又是元气满满的一天</span>
                        <span class="i-read readed">33995</span>
                    </p>
                </div>
            </li>
            <li class="message-item clearfix">
                <div class="item-photo"></div>
                <div class="item-info">
                    <p class="info-line1">
                        <span class="i-name">猪哥哥</span>
                        <span class="i-time">下午6:09</span>
                    </p>
                    <p class="info-line2">
                        <span class="i-content">明天又是元气满满的一天</span>
                        <span class="i-read">5</span>
                    </p>
                </div>
            </li>
            <li class="message-item clearfix">
                <div class="item-photo"></div>
                <div class="item-info">
                    <p class="info-line1">
                        <span class="i-name">猪哥哥</span>
                        <span class="i-time">下午6:09</span>
                    </p>
                    <p class="info-line2">
                        <span class="i-content">明天又是元气满满的一天</span>
                        <span class="i-read">5</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script src="./message.js"></script>
<style lang="sass" scoped>
@mixin text-overflow() {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
@include b(main-chat) {
    @include e(message) {
        .message-list {
            .message-item {
                height: 74px;
                position: relative;
                box-sizing: border-box;
                padding-left: 10px;
                &:after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: calc(100% - 74px);
                    right: 0;
                    bottom: 0;
                    background-color: #d8d8d8;
                }
                .item-photo {
                    float: left;
                    width: 56px;
                    height: 56px;
                    border-radius: 28px;
                    background-color: green;
                    margin-top: 9px;
                    margin-right: 8px;
                    position: relative;
                }
                .item-info {
                    float: left;
                    box-sizing: border-box;
                    padding-top: 10px;
                    width: calc(100% - 74px);
                    .info-line1 {
                        .i-name {
                            font-size: 18px;
                            display: inline-block;
                            max-width: 200px;
                            @include text-overflow;
                        }
                        .i-time {
                            float: right;
                            color: #b1b1b1;
                            font-size: 14px;
                        }
                    }
                    .info-line2 {
                        .i-content {
                            display: inline-block;
                            max-width: 270px;
                            @include text-overflow;
                            color: #8c8c8c;
                            font-size: 14px;
                        }
                        .i-read {
                            float: right;
                            font-size: 12px;
                            min-width: 10px;
                            height: 20px;
                            color: white;
                            text-align: center;
                            line-height: 20px;
                            border-radius: 10px;
                            background-color: #a4d6ee;
                            padding: 0 5px;
                            &.readed {
                              background-color: #e45841;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

